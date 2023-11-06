import { Work } from '@/models';
import * as React from 'react';
import { Stack, Box } from '@mui/system';
import Image from 'next/image';
import { Typography, Chip } from '@mui/material';

export interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', md: '246px' }} flexShrink={0}>
        <Image
          src={work.thumbnail}
          width={246}
          height={180}
          layout="responsive"
          alt=""
        />
      </Box>
      <Box>
        <Typography variant="h4" fontWeight="bold">
          {work.title}
        </Typography>
        <Stack direction="row" sx={{ mt: 2, mb: 2 }}>
          <Chip
            color="secondary"
            label={work.createdAt}
            size="small"
          />
          <Typography ml={3} color="GrayText">
            {work.tagList.join(', ')}
          </Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
}
