'use client';

import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa6';
import Link from 'next/link';

export default function VerifyEmailPage() {
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
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }}
              className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/[0.1] flex items-center justify-center"
            >
              <FaEnvelope className="w-8 h-8 text-white/90" />
            </motion.div>
          </div>

          {/* Header */}
          <div className="text-center mb-6">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-light text-white/90"
            >
              Check your email
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-2 text-sm text-white/50"
            >
              We&apos;ve sent you an email with a link to verify your account.
              Please check your inbox and follow the instructions.
            </motion.p>
          </div>

          {/* Back to Sign In */}
          <div className="text-center">
            <Link
              href="/insight/login"
              className="text-white/90 hover:text-white transition-colors text-sm"
            >
              ← Back to sign in
            </Link>
          </div>
        </div>

        {/* Help text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center text-xs text-white/30"
        >
          Didn&apos;t receive the email?{' '}
          <Link
            href="/insight/resend-verification"
            className="text-white/50 hover:text-white/90 transition-colors"
          >
            Click here to resend
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
} 