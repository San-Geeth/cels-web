import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css'],
})
export class CourseCategoryComponent implements OnInit {
  newCategory!: string;
  newType!: string;
  enableAddCategory: boolean = false;
  categories: string[] = [];
  types: string[] = [];

  constructor(private coursesService: CourseService) {}

  ngOnInit(): void {
    this.categories = this.coursesService.getCourseCats();
    this.types = this.coursesService.getCourseTypes();
  }

  onCategoryAdd() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'New  category will be added to the system!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add course category!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.coursesService.addNewCategory(this.newCategory);
        Swal.fire('Added!', 'New course category has been added.', 'success');
      }
    });
  }

  onTypeAdd() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'New course type will be added to the system!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add course type!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.coursesService.addNewType(this.newType);
        Swal.fire('Added!', 'New course type has been added.', 'success');
      }
    });
  }

  onCategoryNameChange(event: Event) {
    if ((<HTMLInputElement>event.target).value != null && (<HTMLInputElement>event.target).value.length > 0) {
      this.enableAddCategory = true;
    } else {
      this.enableAddCategory = false;
    }
  }
}
