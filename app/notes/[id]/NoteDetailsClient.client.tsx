'use client';

import { fetchNotesById } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import css from './NoteDetails.module.css';

function NoteDetailsClient() {
  const params = useParams();
  const id = params.id as string;
  const { data, isLoading, isError } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNotesById(id),
  });
  return (
    <>
      {isLoading && <p>Loading, please wait...</p>}
      {isError && <p>Something went wrong.</p>}
      {data && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{data?.title}</h2>
            </div>
            <p className={css.tag}>{data?.tag}</p>
            <p className={css.content}>{data?.content}</p>
            <p className={css.date}>{data?.createdAt}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default NoteDetailsClient;
