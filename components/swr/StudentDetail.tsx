import * as React from 'react';
import useSWR from 'swr';

export interface StudentDetailProps {
  studentId: string;
}

const MILLISECOND_PER_HOUR = 60 * 60 + 1000;

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(
    `/students/${studentId}`,
    {
      revalidateOnFocus: false, // khi xem tab khác rồi mở lại tab page nextjs sẽ không gọi lại API
      dedupingInterval: MILLISECOND_PER_HOUR, // trong vòng 1 hour nếu request API bao nhiêu lần vẫn ko gọi
    },
  );
  const handleMutate = () => {
    mutate({ name: 'aaaaa' }, true);
  };
  return (
    <div>
      Name: {data?.name || '--'}{' '}
      <button onClick={handleMutate}>mutate</button>
    </div>
  );
}
