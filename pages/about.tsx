// Client side rendering

import Header from '@/components/common/header';
import { AdminLayout, MainLayout } from '@/components/layout';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';
// import dynamic from 'next/dynamic';

// const Header = dynamic(() => import('@/components/common/header'), {
//   ssr: false,
// });

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = React.useState([]);
  const router = useRouter();

  console.log('About query', router.query);
  const page = router.query?.page || 1;

  React.useEffect(() => {
    if (!page) return;
    (async () => {
      const response = await fetch(
        `http://js-post-api.herokuapp.com/api/posts?_page=${page}`,
      );
      const data = await response.json();
      setPostList(data.data);
    })();
  }, [page]);

  const handleNextPage = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(router.query?.page) || 0) + 1,
        },
      },
      undefined,
      { shallow: true },
    );
  };
  return (
    <Box>
      <h1>About page</h1>
      <Typography component="h1" color="primary.main" variant="h3">
        About page
      </Typography>
      <Header />

      {postList.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}

      <button onClick={handleNextPage}>Next page</button>
    </Box>
  );
}

AboutPage.Layout = AdminLayout;

export async function getStaticProps() {
  console.log('getStaticProps');
  return {
    props: {},
  };
}
