import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { StudentsComponent } from './pages/students/students.component';
import { UsersComponent } from './pages/users/users.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { StaffComponent } from './pages/staff/staff.component';
import { FinancialComponent } from './pages/financial/financial.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllStudentsComponent } from './pages/students/all-students/all-students.component';
import { ViewAndEditStudentComponent } from './pages/students/view-and-edit-student/view-and-edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    StudentsComponent,
    UsersComponent,
    DashboardComponent,
    ClassesComponent,
    CoursesComponent,
    StaffComponent,
    FinancialComponent,
    HomeComponent,
    AllStudentsComponent,
    ViewAndEditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
