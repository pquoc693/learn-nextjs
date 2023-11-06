import * as React from 'react';
import { Box, Stack } from '@mui/system';
import { Typography, Icon } from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
} from '@mui/icons-material';

export interface FooterProps {}

export function Footer(props: FooterProps) {
  const socialLinks = [
    { icon: Facebook, url: 'https://google.com' },
    { icon: Instagram, url: 'https://google.com' },
    { icon: Twitter, url: 'https://google.com' },
    { icon: LinkedIn, url: 'https://google.com' },
  ];
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" justifyContent="center">
        {socialLinks.map((link, index) => (
          <Box
            component="a"
            key={index}
            href={link.url}
            p={2}
            target="_blank"
            rel="noopener noreferer"
          >
            {/* <link.icon /> */}
            <Icon component={link.icon} sx={{ fontSize: 48 }} />
          </Box>
        ))}
      </Stack>
      <Typography>
        Copyright ©{new Date().getFullYear()} All rights reserved{' '}
      </Typography>
    </Box>
  );
}
