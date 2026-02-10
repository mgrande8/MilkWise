import { supabase } from './supabase'
import { CheckIn } from './types'

// Format date as YYYY-MM-DD
const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0]
}

// Save a check-in (creates or updates)
export const saveCheckIn = async (
  userId: string,
  date: Date,
  data: Partial<CheckIn>
): Promise<{ data: CheckIn | null; error: any }> => {
  const dateStr = formatDate(date)

  const { data: existing } = await supabase
    .from('check_ins')
    .select('id')
    .eq('user_id', userId)
    .eq('date', dateStr)
    .single()

  if (existing) {
    // Update existing
    const { data: updated, error } = await supabase
      .from('check_ins')
      .update(data)
      .eq('id', existing.id)
      .select()
      .single()

    return { data: updated, error }
  } else {
    // Insert new
    const { data: inserted, error } = await supabase
      .from('check_ins')
      .insert({
        user_id: userId,
        date: dateStr,
        ...data,
      })
      .select()
      .single()

    return { data: inserted, error }
  }
}

// Get a single check-in by date
export const getCheckIn = async (
  userId: string,
  date: Date
): Promise<CheckIn | null> => {
  const dateStr = formatDate(date)

  const { data } = await supabase
    .from('check_ins')
    .select('*')
    .eq('user_id', userId)
    .eq('date', dateStr)
    .single()

  return data
}

// Get check-ins for a date range
export const getCheckInsRange = async (
  userId: string,
  startDate: Date,
  endDate: Date
): Promise<CheckIn[]> => {
  const { data } = await supabase
    .from('check_ins')
    .select('*')
    .eq('user_id', userId)
    .gte('date', formatDate(startDate))
    .lte('date', formatDate(endDate))
    .order('date', { ascending: true })

  return data || []
}

// Get all check-ins for a user
export const getAllCheckIns = async (userId: string): Promise<CheckIn[]> => {
  const { data } = await supabase
    .from('check_ins')
    .select('*')
    .eq('user_id', userId)
    .order('date', { ascending: false })

  return data || []
}

// Get check-ins for the last N days
export const getRecentCheckIns = async (
  userId: string,
  days: number = 7
): Promise<CheckIn[]> => {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - days)

  return getCheckInsRange(userId, startDate, endDate)
}

// Delete a check-in
export const deleteCheckIn = async (checkInId: string): Promise<{ error: any }> => {
  const { error } = await supabase
    .from('check_ins')
    .delete()
    .eq('id', checkInId)

  return { error }
}

// Calculate day score (same logic as before)
export const calculateDayScore = (checkIn: CheckIn, isWeaning: boolean = false): number => {
  let score = 0
  let maxScore = 0

  // Feeds (0-20 points) — weaning uses lower thresholds
  maxScore += 20
  if (checkIn.feeds_count !== null) {
    if (isWeaning) {
      if (checkIn.feeds_count >= 4) score += 20
      else if (checkIn.feeds_count >= 3) score += 15
      else if (checkIn.feeds_count >= 2) score += 10
      else score += 5
    } else {
      if (checkIn.feeds_count >= 8) score += 20
      else if (checkIn.feeds_count >= 6) score += 15
      else if (checkIn.feeds_count >= 4) score += 10
      else score += 5
    }
  }

  // Wet diapers (0-15 points)
  maxScore += 15
  if (checkIn.wet_diapers !== null) {
    if (checkIn.wet_diapers >= 6) score += 15
    else if (checkIn.wet_diapers >= 4) score += 10
    else score += 5
  }

  // Dirty diapers (0-10 points)
  maxScore += 10
  if (checkIn.dirty_diapers !== null) {
    if (checkIn.dirty_diapers >= 2) score += 10
    else if (checkIn.dirty_diapers >= 1) score += 7
    else score += 3
  }

  // Nourishment (0-15 points)
  maxScore += 15
  if (checkIn.ate_protein) score += 5
  if (checkIn.ate_3_plus_times) score += 5
  if (checkIn.feeling_sick === false) score += 5

  // Hydration (0-10 points)
  maxScore += 10
  if (checkIn.hydration) score += 10

  // Sleep (0-15 points)
  maxScore += 15
  if (checkIn.sleep !== null) {
    score += (checkIn.sleep / 5) * 15
  }

  // Stress (0-15 points) - inverted
  maxScore += 15
  if (checkIn.stress !== null) {
    score += ((6 - checkIn.stress) / 5) * 15
  }

  return Math.round((score / maxScore) * 100)
}
