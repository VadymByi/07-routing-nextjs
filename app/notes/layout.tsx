import { ReactNode } from 'react';
import css from './LayoutNotes.module.css';

interface NotesLayoutProps {
  children: ReactNode;
}

export default function NotesLayout({ children }: NotesLayoutProps) {
  return (
    <div className={css.container}>
      <main className={css.notesWrapper}>{children}</main>
    </div>
  );
}

// import { ReactNode } from 'react';
// import css from './LayoutNotes.module.css';

// type Props = {
//   children: ReactNode;
//   modal: ReactNode;
// };

// export default function NotesLayout({ children, modal }: Props) {
//   return (
//     <div className={css.container}>
//       <main className={css.notesWrapper}>{children}</main>

//       {modal}
//     </div>
//   );
// }
