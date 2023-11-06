import { Work } from '@/models';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import WorkList from '../work/work-list';

export interface FeaturedWorksProps {}

export function FeaturedWorks(props: FeaturedWorksProps) {
  const workList: Work[] = [
    {
      id: '',
      title: 'Designing Dashboards',
      tagList: ['Dashboard'],
      fullDescription: '',
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      createdAt: '2020',
      updatedAt: '',
      thumbnail:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '',
      title: 'Vibrant Portraits of 2020',
      tagList: ['Illustration'],
      fullDescription: '',
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      createdAt: '2018',
      updatedAt: '',
      thumbnail:
        'https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&q=80&w=1450&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '',
      title: '36 Days of Malayalam type',
      tagList: ['Typography'],
      fullDescription: '',
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      createdAt: '2018',
      updatedAt: '',
      thumbnail:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  return (
    <Box component="section" pb={4} pt={2}>
      <Container>
        <Typography variant="h5" mb={4}>
          Featured works
        </Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
