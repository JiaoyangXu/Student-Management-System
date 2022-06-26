package com.example.javaspringbootbackend.controller;

import com.example.javaspringbootbackend.exception.ResourceNotFoundException;
import com.example.javaspringbootbackend.model.Student;
import com.example.javaspringbootbackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    // get student by its id
    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not " +
                "exits with id:" + id ));
        return ResponseEntity.ok(student);
    }

    // update employee rest api

    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student newStudent) {
        Student student = studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not " +
                "exits with id:" + id ));
        student.setFirstName(newStudent.getFirstName());
        student.setLastName(newStudent.getLastName());
        student.setEmailId(newStudent.getEmailId());
        return ResponseEntity.ok(studentRepository.save(student));
    }



}
