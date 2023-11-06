import { authApi } from '@/api-client';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function LoginPage() {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false, // mới vào không gọi API
  });

  const router = useRouter();
  const handleLogin = async () => {
    try {
      await login();
      console.log('redirect');
    } catch (error) {
      console.log('failed to login', error);
    }
  };

  // const handleGetProfile = async () => {
  //   try {
  //     await authApi.getProfile();
  //   } catch (error) {
  //     console.log('failed to getProfile', error);
  //   }
  // };

  const handleLogout = async () => {
    try {
      await logout();
      console.log('redirect');
    } catch (error) {
      console.log('failed to logout', error);
    }
  };
  return (
    <div>
      <h1>Login page</h1>
      <p>Profile: {JSON.stringify(profile)}</p>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleGetProfile}>Get profile</button> */}
      <button onClick={handleLogout}>Log out</button>
      <button onClick={() => router.push('/about')}>
        Go to about
      </button>
    </div>
  );
}
