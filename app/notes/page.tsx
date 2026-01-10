import { QueryClient, dehydrate } from '@tanstack/react-query';
import { HydrationBoundary } from '@tanstack/react-query';
import NotesClient from './filter/[...slug]/Notes.client';
import { fetchNotes } from '@/lib/api';

const PER_PAGE = 10;

export default async function NotesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, ''],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: PER_PAGE,
      }),
  });

  const state = queryClient.getQueryState(['notes', 1, '']);

  if (state?.status === 'error') {
    throw state.error instanceof Error
      ? state.error
      : new Error('Could not fetch the list of notes.');
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}
