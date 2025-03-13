'use client';

import { motion } from 'framer-motion';
import { useUser } from '@/context/user-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { user, profile, loading } = useUser();
  const router = useRouter();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/insight/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#111827]">
        <div className="text-white/50">Loading...</div>
      </div>
    );
  }

  const firstName = profile?.full_name?.split(' ')[0] || 'there';

  return (
    <div className="min-h-screen w-full bg-[#111827] p-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <div className="backdrop-blur-lg bg-white/[0.03] border border-white/[0.1] rounded-xl p-8 shadow-xl">
          <h1 className="text-3xl font-light text-white/90 mb-6">
            Hello, {firstName}! 👋
          </h1>
          
          <p className="text-white/70">
            Welcome to your InsightLab dashboard. This is where you&apos;ll find all your research tools and data.
          </p>
        </div>
      </motion.div>
    </div>
  );
} 