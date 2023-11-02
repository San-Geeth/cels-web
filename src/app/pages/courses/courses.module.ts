import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { RouterModule } from '@angular/router';
import { CourseCategoryComponent } from './course-category/course-category.component';



@NgModule({
  declarations: [
    CoursesComponent,
    AllCoursesComponent,
    CourseCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoursesModule { }
