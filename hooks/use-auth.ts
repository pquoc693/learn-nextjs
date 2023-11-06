import { authApi } from '@/api-client';
import { LoginPayload } from '@/models';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/_internal';

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });

  const firstLoading = profile === undefined && error === undefined;

  async function login() {
    await authApi.login({
      username: 'test1',
      password: 'test11111',
    });
    await mutate();
  }
  async function logout() {
    await authApi.logout();
    await mutate({}, false);
  }

  return {
    profile,
    login,
    error,
    logout,
    firstLoading,
  };
}
