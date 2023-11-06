import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import * as React from 'react';
import Image from 'next/image';
import Avatar from '@/images/avatar.png';

export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <Box
      component="section"
      pt={{ md: 18, sx: 4 }}
      pb={{ md: 9, xs: 7 }}
    >
      <Container>
        <Stack
          spacing={4}
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box>
            <Typography
              component="h1"
              variant="h3"
              fontWeight="bold"
              mb={{ md: 5, xs: 3.5 }}
            >
              Hi, I am John, <br />
              Creative Technologist
            </Typography>
            <Typography mb={5}>
              Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim
              velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
            <Button variant="contained">Download Resume</Button>
          </Box>

          <Box
            sx={{
              minWidth: '240px',
              boxShadow: '-5px 12px',
              color: 'secondary.light',
              borderRadius: '50%',
            }}
          >
            <Image src={Avatar} alt="" layout="responsive" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
