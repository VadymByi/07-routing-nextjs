import css from './NotePreview.module.css';
import { Note } from '@/types/note';

type Props = {
  note: Note;
};

export default function NotePreview({ note }: Props) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{note.title}</h2>

      <p className={css.content}>{note.content}</p>

      {note.tag && <span className={css.tag}>{note.tag}</span>}
    </div>
  );
}
