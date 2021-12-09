import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
