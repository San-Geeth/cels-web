import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student!: Student;
  courses: Course[] = [];

  constructor(
    private coursesService: CourseService
  ) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  onAdd() {
    Swal.fire({
      title: 'Do you want to add new student?',
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      }
    })
  }
}
