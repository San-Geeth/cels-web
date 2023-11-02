import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

export const viewAndEditStudentResolver: ResolveFn<any> = (route, state) => {
  const index = route.params['index'];
  return inject(StudentService).getStudentById(index);
};
