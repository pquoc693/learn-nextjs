import { Post } from '@/models';
import { Box, Typography, Divider } from '@mui/material';
import * as React from 'react';

export interface BlogItemProps {
  data: Post;
}

export function BlogItem({ data }: BlogItemProps) {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        {data.title}
      </Typography>
      <Typography variant="body1" my={2} sx={{ display: 'flex' }}>
        {data.publishedDate}
        <Divider
          orientation="vertical"
          sx={{ mx: 2 }}
          flexItem
          component="span"
        />
        {data.tagList.join(', ')}
      </Typography>
      <Typography variant="body2">{data.description}</Typography>
    </Box>
  );
}
