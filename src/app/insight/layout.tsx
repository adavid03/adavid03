'use client';

import { UserProvider } from '@/context/user-context';

export default function InsightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
} 