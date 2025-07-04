import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; // Use Router, not Route
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

 const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

@Injectable({
  providedIn: 'root'
})
 
export class StudentService {
apiURL:string='http://localhost:8000';
  constructor(private router: Router, private http: HttpClient) { }

createStudent(reqbody: any): Observable<any> {
  console.log(this.apiURL+'/api/student/create'+ " request body in login service", reqbody)
    return this.http.post(this.apiURL+'/api/student/create', reqbody, { headers });
  }

getStudentList(): Observable<any> {
  console.log(this.apiURL+'/api/student/list'+ " request body in login service")
    return this.http.get(this.apiURL+'/api/student/list', { headers });
  }

}
