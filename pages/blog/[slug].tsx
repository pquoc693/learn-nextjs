// Static side generation path

import Seo from '@/components/common/seo';
import { Post } from '@/models';
import { getPostList } from '@/utils/post';
import { Container, Divider } from '@mui/material';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import { unified } from 'unified';

export interface BlogDetailPageProps {
  post: Post;
}

export default function BlogDetailPage({
  post,
}: BlogDetailPageProps) {
  if (!post) return null;
  return (
    <Container>
      <Seo
        data={{
          title: post.title,
          description: post.description,
          url: `${process.env.HOST_URL}/blog/${post.slug}`,
          thumbnailUrl: post.thumbnailUrl || '',
        }}
      />
      <h1>Blog detail page</h1>
      <p>{post.title}</p>
      <p>{post.author?.name}</p>
      <p>{post.description}</p>
      {/* <p>{post.mdContent}</p> */}
      <Divider />
      <div
        dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}
      ></div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getPostList();

  return {
    paths: response.map((post: any) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  BlogDetailPageProps
> = async (context: GetStaticPropsContext) => {
  const response = await getPostList();
  const slug = context.params?.slug;
  const post = response.find((x) => x.slug === slug);

  // server-side
  // build time

  if (!post) {
    return { notFound: true };
  }

  const file = await unified()
    .use(remarkParse)
    .use(remarkToc)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeDocument, { title: 'Blog detail page' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || '');

  post.htmlContent = file.toString();
  return {
    props: {
      post: post,
    },
    // revalidate: 5,
  };
};
