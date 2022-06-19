package com.example.javaspringbootbackend.repository;

import com.example.javaspringbootbackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;


public interface StudentRepository extends JpaRepository<Student, Long> {
}
