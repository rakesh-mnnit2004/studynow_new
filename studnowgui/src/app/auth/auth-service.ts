import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; // Use Router, not Route
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiURL:string='http://localhost:8000';
constructor(private router: Router, private http: HttpClient) { }

UserRegistration(reqbody: any): Observable<any> {
  console.log(this.apiURL+'/api/auth/register'+ " request body in login service", reqbody)
    return this.http.post(this.apiURL+'/api/auth/register', reqbody);
  }

validatelogin(reqbody: any): Observable<any> {
  console.log(this.apiURL+'/api/auth/login'+ " request body in login service", reqbody)
    return this.http.post(this.apiURL+'/api/auth/login', reqbody);
  }

  init(): void | Promise<void> {
    console.log("hello rakesh")
    // Initialization logic here (can return a Promise if async)
     let userinfo=sessionStorage.getItem('userinfo');
     console.log("userinfo in session", userinfo);
     if(userinfo == null){ 
     this.router.navigate(['/login']);
     }
    console.log('AuthService initializer running');
    // Example: return Promise.resolve();
  }
}
