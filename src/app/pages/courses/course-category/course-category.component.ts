import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css']
})
export class CourseCategoryComponent {

  newCategory!: string;

  categories: string[] = [
    'Cat 1',
    'Cat 2'
  ];

  onAdd() {
    Swal.fire({
      title: 'Do you want to add new category ' + this.newCategory,
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(this.newCategory);
        Swal.fire('Saved!', '', 'success')
      }
    })
  }
}
