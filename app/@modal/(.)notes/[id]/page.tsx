import NotePreviewClient from './NotePreview.client';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NotePreviewModal({ params }: Props) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  return <NotePreviewClient noteId={id} />;
}
