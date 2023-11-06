import * as React from 'react';
import { Box } from '@mui/system';

export interface HeaderMobileProps {}

export default function HeaderMobile(props: HeaderMobileProps) {
  return (
    <Box display={{ xs: 'block', md: 'none' }}>HeaderMobile</Box>
  );
}
