import Modal from '@/components/Modal/Modal';
import NotePreviewClient from '@/components/NotePreview/NotePreviewClient';
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

  return (
    <Modal>
      <NotePreviewClient noteId={id} />
    </Modal>
  );
}
