package com.example.demo.service;

import com.example.demo.dto.NoteDTO;
import com.example.demo.model.Note;
import com.example.demo.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NoteService {

    @Autowired
    private NoteRepository repository;

    public Note create(NoteDTO dto) {
        Note note = new Note();
        note.setTitle(dto.getTitle());
        note.setContent(dto.getContent());
        return repository.save(note);
    }

    public List<Note> list() {
        return repository.findAll();
    }
}