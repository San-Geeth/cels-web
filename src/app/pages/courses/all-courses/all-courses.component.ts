import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css'],
})
export class AllCoursesComponent implements OnInit {
  @ViewChild('courseName') courseName!: ElementRef;
  @ViewChild('courseFee') courseFee!: ElementRef;
  @ViewChild('courseDescription') courseDescription!: ElementRef;
  @ViewChild('coursePaymentType') coursePaymentType!: ElementRef;
  selectedPaymentType!: string;
  selectedCategory!: string;
  editable: boolean = false;

  courses: Course[] = [];
  courseCats: string[] = [];
  paymentTypes: string[] = [];

  constructor(private coursesService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
    this.courseCats = this.coursesService.getCourseCats();
    this.paymentTypes = this.coursesService.getPaymentTypes();
  }

  onAdd() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'New course will be added to the system!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add course!',
    }).then((result) => {
      if (result.isConfirmed) {
        const name = this.courseName.nativeElement.value;
        const description = this.courseDescription.nativeElement.value;
        const fee = parseFloat(this.courseFee.nativeElement.value);
        this.coursesService.addnewCourse(
          new Course(name, this.selectedCategory, this.selectedPaymentType, description, fee)
        );
        this.onClear();
        Swal.fire('Added!', 'New course has been added.', 'success');
      }
    });
  }

  onEdit(course: Course) {
    this.editable = true;
    this.courseName.nativeElement.value = course.name;
    this.courseFee.nativeElement.value = course.courseFee;
    this.courseDescription.nativeElement.value = course.description;
    this.selectedPaymentType = course.paymentType;
    this.selectedCategory = course.category;
  }

  onClear() {
    this.editable = false;
    this.courseName.nativeElement.value = '';
    this.courseFee.nativeElement.value = '';
    this.courseDescription.nativeElement.value = '';
    this.selectedPaymentType = ''
    this.selectedCategory = ''
  }

}
