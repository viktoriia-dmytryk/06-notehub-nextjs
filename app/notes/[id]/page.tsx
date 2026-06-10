import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { fetchNotesById } from '@/lib/api';
import NoteDetailsClient from './NoteDetails.client';


export default async function NoteDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNotesById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}