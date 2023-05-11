import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('http://localhost:/api/Candidate/GetAll');
  }
  delete(id: any) {
    return this.http.delete('http://localhost:/api/Candidate/Delete?id=' + id);
  }
}
