import { Work } from '@/models';
import * as React from 'react';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';
import WorkCard from './work-card';

export interface WorkListProps {
  workList: Work[];
}

export default function WorkList({ workList }: WorkListProps) {
  if (workList.length === 0) return null;
  return (
    <Box>
      {workList.map((work, index) => (
        <React.Fragment key={index}>
          <WorkCard work={work} />
          <Divider sx={{ my: 3 }} />
        </React.Fragment>
      ))}
    </Box>
  );
}
