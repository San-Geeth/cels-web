import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  private courses: Course[] = [
    new Course('IELTS', 'type1', 34, 'Test descriptions for IELTS', 56000),
    new Course('PTE', 'type1', 56, 'Test descriptions for PTE', 40000),
    new Course('KET', 'type1', 18, 'Test descriptions for KET', 34000)
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  addnewCourse(course: Course): void {
    this.courses.push(course);
  }
}
