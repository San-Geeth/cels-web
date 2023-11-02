import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

export const allStudentsResolver: ResolveFn<any> = (route, state) => {
  return inject(StudentService).getStudents();
};
