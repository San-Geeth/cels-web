import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentsComponent } from './pages/students/students.component';
import { UsersComponent } from './pages/users/users.component';
import { StaffComponent } from './pages/staff/staff.component';
import { FinancialComponent } from './pages/financial/financial.component';
import { AllStudentsComponent } from './pages/students/all-students/all-students.component';
import { ViewAndEditStudentComponent } from './pages/students/view-and-edit-student/view-and-edit-student.component';
import { viewAndEditStudentResolver } from './pages/students/view-and-edit-student/view-and-edit-student.resolver';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'students', component: StudentsComponent, children: [
    {path: 'all-students', component: AllStudentsComponent},
    {path: ':index/view-edit', component: ViewAndEditStudentComponent, resolve: {student: viewAndEditStudentResolver}}
  ]},
  {path: 'users', component: UsersComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'financial', component: FinancialComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
