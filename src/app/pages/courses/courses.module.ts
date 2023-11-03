import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { RouterModule } from '@angular/router';
import { CourseCategoryComponent } from './course-category/course-category.component';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    CoursesComponent,
    AllCoursesComponent,
    CourseCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatChipsModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule
  ]
})
export class CoursesModule { }
