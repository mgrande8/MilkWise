'use client'

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react'
import { useAuth } from './AuthContext'
import { CheckIn } from '@/lib/types'
import {
  saveCheckIn as saveCheckInToDb,
  getCheckIn,
  getRecentCheckIns,
  getAllCheckIns,
  calculateDayScore,
} from '@/lib/checkInService'

interface CheckInContextType {
  todayCheckIn: CheckIn | null
  recentCheckIns: CheckIn[]
  allCheckIns: CheckIn[]
  loading: boolean
  saveCheckIn: (data: Partial<CheckIn>, date?: Date) => Promise<{ error: any }>
  refreshCheckIns: () => Promise<void>
  getScoreForDate: (date: Date, isWeaning?: boolean) => number | null
}

const CheckInContext = createContext<CheckInContextType | undefined>(undefined)

export function CheckInProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [todayCheckIn, setTodayCheckIn] = useState<CheckIn | null>(null)
  const [recentCheckIns, setRecentCheckIns] = useState<CheckIn[]>([])
  const [allCheckIns, setAllCheckIns] = useState<CheckIn[]>([])
  const [loading, setLoading] = useState(true)

  const refreshCheckIns = useCallback(async () => {
    if (!user) {
      setTodayCheckIn(null)
      setRecentCheckIns([])
      setAllCheckIns([])
      setLoading(false)
      return
    }

    setLoading(true)

    // Get today's check-in
    const today = await getCheckIn(user.id, new Date())
    setTodayCheckIn(today)

    // Get last 7 days
    const recent = await getRecentCheckIns(user.id, 7)
    setRecentCheckIns(recent)

    // Get all check-ins (for calendar)
    const all = await getAllCheckIns(user.id)
    setAllCheckIns(all)

    setLoading(false)
  }, [user])

  useEffect(() => {
    refreshCheckIns()
  }, [refreshCheckIns])

  const saveCheckIn = async (data: Partial<CheckIn>, date?: Date) => {
    if (!user) return { error: 'Not logged in' }

    const targetDate = date || new Date()
    const { data: saved, error } = await saveCheckInToDb(user.id, targetDate, data)

    if (!error && saved) {
      // Update todayCheckIn only if saving for today
      const todayStr = new Date().toISOString().split('T')[0]
      const savedStr = targetDate.toISOString().split('T')[0]
      if (todayStr === savedStr) {
        setTodayCheckIn(saved)
      }
      await refreshCheckIns()
    }

    return { error }
  }

  const getScoreForDate = (date: Date, isWeaning: boolean = false): number | null => {
    const dateStr = date.toISOString().split('T')[0]
    const checkIn = allCheckIns.find(c => c.date === dateStr)
    if (!checkIn) return null
    return calculateDayScore(checkIn, isWeaning)
  }

  return (
    <CheckInContext.Provider value={{
      todayCheckIn,
      recentCheckIns,
      allCheckIns,
      loading,
      saveCheckIn,
      refreshCheckIns,
      getScoreForDate,
    }}>
      {children}
    </CheckInContext.Provider>
  )
}

export const useCheckIn = () => {
  const context = useContext(CheckInContext)
  if (context === undefined) {
    throw new Error('useCheckIn must be used within a CheckInProvider')
  }
  return context
}
