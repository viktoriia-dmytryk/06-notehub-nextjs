import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import NotesPage from './NotesPage.client';
import { fetchNotes } from '@/lib/api';

export default async function Notes() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['notes', '', 1],
    queryFn: () => fetchNotes('', 1),
  });
  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesPage />
      </HydrationBoundary>
    </>
  );
}
