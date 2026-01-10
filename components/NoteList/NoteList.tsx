'use client';

import Link from 'next/link';
import css from './NoteList.module.css';
import { Note } from '@/types/note';

interface Props {
  notes: Note[];
}

export default function NoteList({ notes }: Props) {
  if (notes.length === 0) {
    return <p>No notes available.</p>;
  }

  return (
    <ul className={css.list}>
      {notes.map(note => (
        <li key={note.id} className={css.listItem}>
          <Link href={`/notes/${note.id}`} className={css.link}>
            <h3 className={css.title}>{note.title}</h3>

            <p className={css.content}>{note.content.slice(0, 80)}...</p>

            <div className={css.footer}>
              <span className={css.tag}>{note.tag}</span>
              <span className={css.date}>{note.createdAt}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
