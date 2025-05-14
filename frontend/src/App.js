import React from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

export default function App() {
  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Gestión de Notas</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
}