package com.example.demo.controller;

import com.example.demo.dto.NoteDTO;
import com.example.demo.model.Note;
import com.example.demo.service.NoteService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.*;
import java.util.List;

@RestController
@RequestMapping("/api/notes")
@Validated
public class NoteController {

    private final NoteService service;
    public NoteController(NoteService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Note> create(@Valid @RequestBody NoteDTO dto) {
        Note saved = service.create(dto);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<List<Note>> list() {
        return ResponseEntity.ok(service.list());
    }
}