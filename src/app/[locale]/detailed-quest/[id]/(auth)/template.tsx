'use client';

import { useEffect } from 'react';
import { checkSession } from '@/http';
import { useRouter } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    checkSession().then((session) => {
      if (!session) {
        router.push('/signin');
      }
    });
  }, []);
  return children;
}
