import * as React from 'react';
import { Box, Stack, Container } from '@mui/system';
import { Link as MuiLink } from '@mui/material';
import { ROUTE_LIST } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export interface HeaderDesktopProps {}

export default function HeaderDesktop(props: HeaderDesktopProps) {
  const router = useRouter();
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link key={route.label} href={route.path} passHref>
              <MuiLink
                className={clsx({
                  active: router.pathname === route.path,
                })}
                sx={{ mr: 2, fontWeight: 'medium' }}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
