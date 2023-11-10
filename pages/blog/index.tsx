// Static side generation

import { BlogItem } from '@/components/blog';
import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { getPostList } from '@/utils/post';
import { Box, Container, Divider } from '@mui/material';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface BlogListPageProps {
  posts: Post[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  return (
    <Container>
      <h1>Blog</h1>
      <Box
        component="ul"
        style={{ listStyleType: 'none', padding: 0 }}
      >
        {posts.map((post, index) => (
          <li key={post.id}>
            <Link href={`blog/${post.slug}`}>
              <BlogItem data={post} key={index} />
            </Link>
            <Divider sx={{ my: 3 }} />
          </li>
        ))}
      </Box>
    </Container>
  );
}

BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<
  BlogListPageProps
> = async () => {
  // server-side
  // build time
  //   console.log('static pros');
  // const response = await fetch(
  //   'http://js-post-api.herokuapp.com/api/posts?_page=1',
  // );
  // const data = await response.json();
  //   console.log(data);

  // convert markdown file to javascript object
  const data = await getPostList();

  return {
    props: {
      posts: data,
    },
  };
};
