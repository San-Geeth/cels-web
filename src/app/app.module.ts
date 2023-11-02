import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsModule } from './pages/students/students.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    UsersComponent,
    DashboardComponent,
    ClassesComponent,
    CoursesComponent,
    StaffComponent,
    FinancialComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
