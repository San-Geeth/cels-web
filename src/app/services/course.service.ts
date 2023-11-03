import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  private courses: Course[] = [
    new Course('IELTS', 'Cat 1', 'Installment', 'Test descriptions for IELTS', 56000, 56),
    new Course('PTE', 'Cat 2', 'Full', 'Test descriptions for PTE', 40000, 67),
    new Course('KET', 'Cat 1', 'Full', 'Test descriptions for KET', 34000, 90)
  ];

  private courseCats: string[] = [
    'Cat 1',
    'Cat 2'
  ]

  private paymentTypes: string[] = [
    'Installment',
    'Full'
  ]

  private courseTypes: string[] = [
    'Level 1',
    'Lebel 2',
    'Intermediate',
    'Advanced'
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

  getCourseTypes() {
    return this.courseTypes;
  }

  addNewCategory(category: string) {
    this.courseCats.push(category);
  }

  addNewType(type: string) {
    this.courseTypes.push(type);
  }
}
