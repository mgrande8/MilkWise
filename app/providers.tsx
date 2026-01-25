'use client'

import { ReactNode } from 'react'
import { AuthProvider } from '@/contexts/AuthContext'
import { CheckInProvider } from '@/contexts/CheckInContext'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <CheckInProvider>
        {children}
      </CheckInProvider>
    </AuthProvider>
  )
}
