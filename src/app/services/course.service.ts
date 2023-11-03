import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  private courses: Course[] = [
    new Course('IELTS', 'type1', 'Test descriptions for IELTS', 56000, 56),
    new Course('PTE', 'type1', 'Test descriptions for PTE', 40000, 67),
    new Course('KET', 'type1', 'Test descriptions for KET', 34000, 90)
  ];

  private courseCats: string[] = [
    'Cat 1',
    'Cat 2'
  ]

  private paymentTypes: string[] = [
    'Installment',
    'Full'
  ]

  getCourses() {
    return this.courses;
  }

  addnewCourse(course: Course): void {
    this.courses.push(course);
  }

  getCourseCats() {
    return this.courseCats;
  }

  getPaymentTypes() {
    return this.paymentTypes;
  }
}
