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

  courses: Course[] = [];
  checked: boolean = false;
  showSameAsContact: boolean = true;
  contact!: string;
  whatsapp!: string;

  constructor(
    private coursesService: CourseService
  ) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  checkWhatsAppNull() {
    if(this.whatsapp != null && this.whatsapp.length > 0) {
      this.showSameAsContact = false;
    } else if (this.whatsapp.length <= 0) {
      this.showSameAsContact = true;
    }
  }
  setWhatsApp() {
    if(this.checked === true) {
      this.whatsapp = this.contact
    } else {
      this.whatsapp = '';
    }
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
