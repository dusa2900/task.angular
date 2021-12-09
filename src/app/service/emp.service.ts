import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  public api:string=" http://localhost:3000/employees";
  constructor(private http:HttpClient) { }

  getEmployees():Observable<any>
  {
    return this.http.get<any>(this.api);
  }
  deleteEmployee(x:number):Observable<any>
  {
    return this.http.delete("http://localhost:3000/employees/"+x);
  }
}
 