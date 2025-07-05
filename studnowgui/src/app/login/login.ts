import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth-service';
import { Router, RouterLink } from '@angular/router'; // Use Router, not Route
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;
  loginError:boolean=false;
  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

onSubmit() {
  console.log(this.loginForm.valid+ "helloooo ", this.loginForm.value)
    if (this.loginForm.valid) {
      // Call validatelogin from AuthService
      this.authservice.validatelogin(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
           sessionStorage.setItem('userinfo', JSON.stringify(response));
           this.router.navigate(['/dashboard']);
          // You can navigate or show a message here

        },
        error: (error) => {
          this.loginError=true;
          console.error('Login failed:', error);
          // Show error message to user
        }
      });
    }
  }
}