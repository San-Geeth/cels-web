import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import Swal from 'sweetalert2';


export interface Course {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  student!: Student;

  courses: Course[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

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
