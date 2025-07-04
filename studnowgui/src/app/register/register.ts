import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth-service';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authservice:AuthService) {
    this.registerForm = this.fb.group({
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit() {
  console.log(this.registerForm.valid+ "helloooo ", this.registerForm.value)
    if (this.registerForm.valid) {
      // Call validatelogin from AuthService
      this.authservice.UserRegistration(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
           this.router.navigate(['/login']);
          // You can navigate or show a message here

        },
        error: (error) => {
          console.error('Login failed:', error);
          // Show error message to user
        }
      });
    }
  }
}