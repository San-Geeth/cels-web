import {Component} from '@angular/core';
import {Student} from "../Student";

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent {
  editable: boolean = false;
  student: Student = {
    firstName: 'Lakshitha',
    lastName: 'Sangeeth',
    address: '1976/2, galwala Road, Nagasena Mw',
    birthday: '1998.10.05',
    email: 'sangeeth@gmail.com',
    index: 'STD1234',
    guardianName: '',
    school: '',
    company: 'ikman.lk',
    grade: 0
  }
}
