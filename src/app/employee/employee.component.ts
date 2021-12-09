import { Component, OnInit } from '@angular/core';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: any;
  selected: any;
  public employee:any;
  boxValid:boolean=false;
  constructor(private emp: EmpService) { }

  ngOnInit(): void {
   this.getData(); 
  }

  getData()
  {
    this.emp.getEmployees().subscribe(res => this.employees = res);
  }
  selectAll(event: any) {
    if (event.target.checked) {
      this.employees = this.employees.map((row: any) => {
        row.selected = true;
        return row;
      });
    } else {
      this.employees = this.employees.map((row: any) => {
        row.selected = false;
        return row;
      });
    }
  }

  viewProfile(x: number) {
     this.emp.getEmployees().subscribe((res: any) => {
       res.filter((item: any) => {
        if (item.projectId == x)

         { this.boxValid=true;
           this.employee = item;
          console.log("employee",this.employee.projectId,this.employee.projectName,this.employee.projectHead,this.employee.startDate);
        }
      })
    })
  }
  deleteProfile(x:number)
  {
   this.emp.deleteEmployee(x).subscribe(()=>{
     console.log("pavan relangi ",x);
     
   //  alert(` Project ID ${x} is Successfully deleted`)
     //this.getData();
    })
    
  }
  add()
  {
    console.log("hh");
    
    let row = document.createElement('tbody');  
     // row.className = 'row';
      row.innerHTML = `
   <tbody>
   <tr >
   <td>
       <input type="number" name="projectId" #projectId="ngModel"  class="form-control " [(ngModel)]="x.projectId">
 
   </td>
   <td><input type="text" class="form-control" [(ngModel)]="x.projectName"></td>
   <td><input  type="text"  class="form-control" [(ngModel)]="x.projectHead"></td>
   <td><input type="date"  class="form-control" value={{x.projectId}} [(ngModel)]="x.StartDate"></td>
   <td class="text-center">

       <button type="submit" class="btn btn-primary" >Submit</button>
       &nbsp;
       <button class="btn btn-danger"  (click)="deleteProfile(x.projectId)"> Delete</button>
       &nbsp;
       <button class="btn btn-info" (click)="viewProfile(x.projectId)"  data-bs-toggle="modal" data-bs-target="#exampleModal"> View</button>
     
   </td>
</tr>
   </tbody>`;
      document.querySelector('.fields')?.append(row);
  }
}
