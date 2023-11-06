// Static side generation

import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface PostListPageProps {
  posts: any[];
}

export default function PostListPage({ posts }: PostListPageProps) {
  return (
    <div>
      <h1>POST list page</h1>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps<
  PostListPageProps
> = async (context: GetStaticPropsContext) => {
  // server-side
  // build time
  //   console.log('static pros');
  const response = await fetch(
    'http://js-post-api.herokuapp.com/api/posts?_page=1',
  );
  const data = await response.json();
  //   console.log(data);

  return {
    props: {
      posts: data.data,
    },
  };
};
