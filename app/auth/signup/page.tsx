'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

export default function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    const { error } = await signUp(email, password, name)

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-[#FDF8F3] to-[#F5E6DC]">
      <div className="w-full max-w-[400px] bg-white rounded-[24px] p-8 shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-[28px] font-bold text-[#4A3F4B] mb-2">Join MilkWise</h1>
          <p className="text-[16px] text-[#9B9299]">Your breastfeeding support starts here 💛</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {error && (
            <div className="p-3 bg-red-50 border border-[#C4887A] rounded-lg text-[#C4887A] text-[14px] text-center">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[14px] font-semibold text-[#4A3F4B]">
              Your Name (optional)
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What should we call you?"
              className="px-4 py-3.5 border-2 border-[#E5E5E5] rounded-xl text-[16px] focus:outline-none focus:border-[#8BA888] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[14px] font-semibold text-[#4A3F4B]">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mama@email.com"
              required
              className="px-4 py-3.5 border-2 border-[#E5E5E5] rounded-xl text-[16px] focus:outline-none focus:border-[#8BA888] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-[14px] font-semibold text-[#4A3F4B]">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              required
              className="px-4 py-3.5 border-2 border-[#E5E5E5] rounded-xl text-[16px] focus:outline-none focus:border-[#8BA888] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-[14px] font-semibold text-[#4A3F4B]">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Type password again"
              required
              className="px-4 py-3.5 border-2 border-[#E5E5E5] rounded-xl text-[16px] focus:outline-none focus:border-[#8BA888] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="py-4 bg-[#C4887A] text-white rounded-xl text-[16px] font-semibold hover:bg-[#b37a6d] transition-colors disabled:bg-[#CCC] disabled:cursor-not-allowed mt-2"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center text-[14px] text-[#666]">
          <p>
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[#C4887A] font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
