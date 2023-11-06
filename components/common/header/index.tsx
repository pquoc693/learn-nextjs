import * as React from 'react';
import { Box } from '@mui/system';
import HeaderMobile from './header-mobile';
import HeaderDesktop from './header-desktop';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <Box component="header" py={2} textAlign="center">
      <HeaderMobile />
      <HeaderDesktop />
    </Box>
  );
}
