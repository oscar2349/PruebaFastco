import React, { useEffect } from 'react';
import { useNotesStore } from '../store/useNotesStore';

export default function NoteList() {
  const notes = useNotesStore((state) => state.notes);
  const fetchNotes = useNotesStore((state) => state.fetchNotes);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <ul className="p-4">
      {notes.map((n) => (
        <li key={n.id} className="border-b py-2">
          <h3 className="font-bold">{n.title}</h3>
          <p>{n.content}</p>
        </li>
      ))}
    </ul>
  );
}