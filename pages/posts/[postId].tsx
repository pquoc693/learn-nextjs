// Static side generation path

import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {
  post: any;
}

export default function PostDetailPage({
  post,
}: PostDetailPageProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading</div>;
  }
  if (!post) return null;
  return (
    <div>
      <h1>Post detail page</h1>
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log(`\ngetStaticPaths`);
  const response = await fetch(
    'http://js-post-api.herokuapp.com/api/posts?_page=1',
  );
  const data = await response.json();

  return {
    paths: data.data.map((post: any) => ({
      params: { postId: post.id },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<
  PostDetailPageProps
> = async (context: GetStaticPropsContext) => {
  console.log(`getStaticProps`, context.params?.postId);
  const postId = context.params?.postId;
  // server-side
  // build time

  if (!postId) {
    return { notFound: true };
  }
  //   console.log('static pros');
  const response = await fetch(
    `http://js-post-api.herokuapp.com/api/posts/${postId}`,
  );
  const data = await response.json();
  //   console.log(data);

  return {
    props: {
      post: data,
    },
    revalidate: 5,
  };
};
