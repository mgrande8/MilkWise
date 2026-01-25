export interface Profile {
  id: string
  email: string
  name: string | null
  baby_birth_date: string | null
  feeding_journey: string | null
  subscription_status: 'free' | 'pro'
  affirmation_time: string
  notifications_enabled: boolean
  created_at: string
}

export interface CheckIn {
  id: string
  user_id: string
  date: string
  feeds_count: number | null
  feeds_last_breast: 'Left' | 'Right' | 'Both' | null
  wet_diapers: number | null
  dirty_diapers: number | null
  ate_protein: boolean | null
  ate_3_plus_times: boolean | null
  feeling_sick: boolean | null
  hydration: boolean | null
  sleep: number | null
  stress: number | null
  pumping_sessions: number | null
  baby_weight: number | null
  created_at: string
}

export interface User {
  id: string
  email: string
}
