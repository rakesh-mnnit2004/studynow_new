import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; // Use Router, not Route
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private router: Router, private http: HttpClient) { }



  init(): void | Promise<void> {
    console.log("hello rakesh")
    // Initialization logic here (can return a Promise if async)
     this.router.navigate(['/login']);
    console.log('AuthService initializer running');
    // Example: return Promise.resolve();
  }
}
