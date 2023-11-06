// import { Inter } from 'next/font/google';
import Seo from '@/components/common/seo';
import { FeaturedWorks, Hero, RecentPost } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { Box } from '@mui/system';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Box>
      <Seo
        data={{
          title: 'NextJS Tutorials',
          description:
            'Step by step tutorials to build a full CRUD website using NextJS for beginners',
          url: 'https://learn-nextjs-rru9jr3o1-pquoc693.vercel.app/',
          thumbnailUrl:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoshace.com%2Fnextjs-tutorial-getting-started-with-nextjs%2F&psig=AOvVaw1iVCZ-0LRD_At3lQPG6HuR&ust=1699367545136000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCXvcjLr4IDFQAAAAAdAAAAABAE',
        }}
      />
      <Hero />
      <RecentPost />
      <FeaturedWorks />
    </Box>
  );
}

Home.Layout = MainLayout;
