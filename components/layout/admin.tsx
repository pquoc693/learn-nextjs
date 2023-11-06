import { LayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';
import { Auth } from '../common';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';

export function AdminLayout({ children }: LayoutProps) {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false, // mới vào không gọi API
  });
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logout();
      // console.log('redirect');
      router.push('/login');
    } catch (error) {
      console.log('failed to logout', error);
    }
  };
  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>
      <button onClick={handleLogout}>Logout</button>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      {children}
    </Auth>
  );
}
