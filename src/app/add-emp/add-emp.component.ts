import { Component, OnInit } from '@angular/core';
import { Employee } from './emp';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
public emp=new Employee();
  constructor() { }

  ngOnInit(): void {
  }

}
