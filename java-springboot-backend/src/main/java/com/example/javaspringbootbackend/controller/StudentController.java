package com.example.javaspringbootbackend.controller;

import com.example.javaspringbootbackend.model.Student;
import com.example.javaspringbootbackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    // get All students

    @GetMapping("/students")
    public List<Student> getAllStudents () {
        return studentRepository.findAll();
    }

    // create student rest api
    @PostMapping("/students")
    public Student createStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }
}
