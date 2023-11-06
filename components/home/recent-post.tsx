import * as React from 'react';
import { Link as MuiLink } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import { Typography } from '@mui/material';
import Link from 'next/link';
import PostCard from './post-card';
import { Post } from '@/models';

export interface RecentPostProps {}

export function RecentPost(props: RecentPostProps) {
  const postList: Post[] = [
    {
      id: '',
      title: 'Making a design system from scratch',
      publishedDate: '12 Feb 2020',
      tagList: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: '',
      title: 'Creating pixel perfect icons in Figma',
      publishedDate: '12 Feb 2020',
      tagList: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ];
  return (
    <Box component="section" bgcolor="secondary.light" pb={4} pt={2}>
      <Container>
        <Stack
          direction="row"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignContent="center"
        >
          <Typography variant="h5">Recent posts</Typography>
          <Link href="/blog" passHref>
            <MuiLink
              component="div"
              sx={{ display: { xs: 'none', md: 'inline-block' } }}
            >
              View all
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          //   direction="row"
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          {postList.map((item, index) => (
            <Box key={index}>
              <PostCard data={item} />
            </Box>
          ))}

          {/* <Box>
            <PostCard />
          </Box> */}
        </Stack>
      </Container>
    </Box>
  );
}
