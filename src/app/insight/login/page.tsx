'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/user-context';
import { FaEnvelope, FaLock, FaSpinner } from 'react-icons/fa6';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const { signIn } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await signIn(email, password);
      router.push('/insight/dashboard');
    } catch (err) {
      setError(
        err instanceof Error 
          ? err.message 
          : 'An unexpected error occurred. Please try again.'
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#111827]">
      {/* Background gradients */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm relative z-10"
      >
        {/* Glass card */}
        <div className="backdrop-blur-lg bg-white/[0.03] border border-white/[0.1] rounded-xl p-6 shadow-xl">
          {/* Header */}
          <div className="text-center mb-6">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-light text-white/90"
            >
              Welcome back to InsightLab
            </motion.h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: error ? 1 : 0,
                height: error ? 'auto' : 0
              }}
            >
              {error && (
                <div
                  role="alert"
                  className="text-sm text-red-400/90 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2"
                >
                  {error}
                </div>
              )}
            </motion.div>

            {/* Email Field */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-white/50 pointer-events-none" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-white/[0.03] border border-white/[0.1] rounded-lg pl-10 pr-4 py-2 text-white/90 text-sm
                    placeholder:text-white/50 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20
                    transition-all duration-200
                    [&:-webkit-autofill]:shadow-[0_0_0_1000px_rgb(17,24,39)_inset]
                    [&:-webkit-autofill]:text-white/90
                    [&:-webkit-autofill]:[-webkit-text-fill-color:rgba(255,255,255,0.9)]
                    [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s]"
                  required
                  aria-required="true"
                  aria-invalid={error ? 'true' : 'false'}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-white/50 pointer-events-none" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-white/[0.03] border border-white/[0.1] rounded-lg pl-10 pr-4 py-2 text-white/90 text-sm
                    placeholder:text-white/50 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20
                    transition-all duration-200
                    [&:-webkit-autofill]:shadow-[0_0_0_1000px_rgb(17,24,39)_inset]
                    [&:-webkit-autofill]:text-white/90
                    [&:-webkit-autofill]:[-webkit-text-fill-color:rgba(255,255,255,0.9)]
                    [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s]"
                  required
                  aria-required="true"
                  aria-invalid={error ? 'true' : 'false'}
                />
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link
                href="/insight/reset-password"
                className="text-xs text-white/50 hover:text-white/90 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`
                w-full py-2 rounded-lg text-sm font-light relative group overflow-hidden
                backdrop-blur-lg bg-white/[0.03] border border-white/[0.1]
                hover:bg-white/[0.05] transition-all duration-200
                ${isLoading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center justify-center text-white/90">
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </span>
            </motion.button>

            {/* Sign Up Link */}
            <p className="text-center text-white/50 text-sm">
              Don&apos;t have an account?{' '}
              <Link
                href="/insight/register"
                className="text-white/90 hover:text-white transition-colors"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center text-xs text-white/30"
        >
          By signing in, you agree to our{' '}
          <Link
            href="/terms"
            className="text-white/50 hover:text-white/90 transition-colors"
          >
            Terms
          </Link>
          {' '}and{' '}
          <Link
            href="/privacy"
            className="text-white/50 hover:text-white/90 transition-colors"
          >
            Privacy Policy
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
} 