import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit, AfterViewInit {
  students: Student[] = [];
  displayedColumns: string[] = ['index', 'firstName', 'lastName', 'action'];
  selectedStudent!: Student;
  dataSource!: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private studentService: StudentService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {}
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    console.log("after",this.students)
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
    this.dataSource = new MatTableDataSource<Student>(this.students);
  }

  vieworEdit(student: Student): void {
    console.log('test')
    this.route.navigate(['/students', student.index, "view-edit"])
  }

  addStudent() {
    this.route.navigate(['/students', 'add-student'])
  }

}

