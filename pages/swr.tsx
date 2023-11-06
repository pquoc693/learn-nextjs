import { StudentDetail } from '@/components/swr';
import * as React from 'react';

export default function SWRPage() {
  return (
    <div>
      <h1>SWR Playground</h1>

      <ul>
        <li>
          <StudentDetail studentId="lea319jollj7y1rs" />
        </li>
        <li>
          <StudentDetail studentId="lea319jollj7y1rt" />
        </li>
        <li>
          <StudentDetail studentId="lea319jollj7y1ru" />
        </li>
      </ul>
    </div>
  );
}
