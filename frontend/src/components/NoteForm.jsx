import React, { useState } from 'react';
import { useNotesStore } from '../store/useNotesStore';

export default function NoteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const createNote = useNotesStore((state) => state.createNote);

  const handleSubmit = (e) => {
    e.preventDefault();
    createNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border p-2 w-full mb-2"
      />
      <textarea
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Agregar Nota
      </button>
    </form>
  );
}