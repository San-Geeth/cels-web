import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { StudentsComponent } from './students.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { ViewAndEditStudentComponent } from './view-and-edit-student/view-and-edit-student.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AddStudentComponent } from './add-student/add-student.component';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    StudentsComponent,
    AllStudentsComponent,
    ViewAndEditStudentComponent,
    AddStudentComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
  ],
})
export class StudentsModule {}
