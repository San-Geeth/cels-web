import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  students: Student[] = [];
  selectedStudent!: Student;

  constructor(
    private studentService: StudentService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  vieworEdit(student: Student): void {
    console.log('test')
    this.route.navigate(['/students', student.index, "view-edit"])
  }

}
