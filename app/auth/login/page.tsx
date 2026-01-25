'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await signIn(email, password)

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
          <h1 className="text-[28px] font-bold text-[#4A3F4B] mb-2">Welcome Back</h1>
          <p className="text-[16px] text-[#9B9299]">Continue your breastfeeding journey 💛</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {error && (
            <div className="p-3 bg-red-50 border border-[#C4887A] rounded-lg text-[#C4887A] text-[14px] text-center">
              {error}
            </div>
          )}

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
              placeholder="Your password"
              required
              className="px-4 py-3.5 border-2 border-[#E5E5E5] rounded-xl text-[16px] focus:outline-none focus:border-[#8BA888] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="py-4 bg-[#C4887A] text-white rounded-xl text-[16px] font-semibold hover:bg-[#b37a6d] transition-colors disabled:bg-[#CCC] disabled:cursor-not-allowed mt-2"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-[14px] text-[#666]">
          <p>
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="text-[#C4887A] font-semibold hover:underline">
              Create one
            </Link>
          </p>
          <Link
            href="/auth/forgot-password"
            className="block mt-3 text-[#C4887A] font-medium hover:underline"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  )
}
