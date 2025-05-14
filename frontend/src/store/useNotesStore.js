import create from 'zustand';
import axios from 'axios';

export const useNotesStore = create((set) => ({
  notes: [],
  fetchNotes: async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/notes');
      set({ notes: data });
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  },
  createNote: async (title, content) => {
    try {
      const { data } = await axios.post('http://localhost:8080/api/notes', { title, content });
      set((state) => ({ notes: [...state.notes, data] }));
    } catch (error) {
      console.error('Error creating note:', error);
    }
  },
}));