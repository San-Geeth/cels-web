import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  private students: Student[] = [
    new Student(
      '1',
      'Alice',
      'Johnson',
      '0702196566',
      'alice@example.com',
      '1995-03-15',
      '123 Elm St'
    ),
    new Student(
      '2',
      'Bob',
      'Smith',
      '0702196566',
      'bob@example.com',
      '1998-07-20',
      '456 Oak St'
    ),
    new Student(
      '3',
      'Charlie',
      'Brown',
      '0702196566',
      'charlie@example.com',
      'Company C',
      '789 Maple St'
    ),
    new Student(
      '4',
      'Charlie',
      'Brown',
      '0702196566',
      'charlie@example.com',
      'Company C',
      '789 Maple St'
    ),
    new Student(
      '5',
      'Charlie',
      'Brown',
      '0702196566',
      'charlie@example.com',
      'Company C',
      '789 Maple St'
    ),
    new Student(
      '6',
      'Charlie',
      'Brown',
      '0702196566',
      'charlie@example.com',
      'Company C',
      '789 Maple St'
    )
  ];

  getStudents() {
    return this.students;
  }

  getStudentById(index: string) {
    const std = this.students.find(
      (s) => {
        return s.index === index;
      }
    );
    return std;
  }
}
