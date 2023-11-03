import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent {

  courses: Course[] = [
    new Course('IELTS', 'type1', 34, 'Test descriptions for IELTS'),
    new Course('PTE', 'type1', 56, 'Test descriptions for PTE'),
    new Course('KET', 'type1', 18, 'Test descriptions for KET'),
  ];

  onAdd() {

  }
}
