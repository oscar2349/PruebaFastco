import logo from './logo.svg';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Gestión de Notas</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default App;
