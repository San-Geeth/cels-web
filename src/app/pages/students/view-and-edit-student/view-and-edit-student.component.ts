import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-view-and-edit-student',
  templateUrl: './view-and-edit-student.component.html',
  styleUrls: ['./view-and-edit-student.component.css']
})
export class ViewAndEditStudentComponent implements OnInit {

  student!: Student;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      (data: Data) => {
        console.log('data', data['student'])
        this.student = data['student'];
      }
    )
  }

}
