import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentService } from '../service/student';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private studentservice: StudentService) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      courses: ['']
    });
  }

  onSubmit() {
  console.log(this.studentForm.valid+ "helloooo ", this.studentForm.value)
    if (this.studentForm.valid) {
      // Call validatelogin from AuthService
      this.studentservice.createStudent(this.studentForm.value).subscribe({
        next: (response) => {
          console.log('student created successful:', response);
           this.router.navigate(['/dashboard']);
          // You can navigate or show a message here

        },
        error: (error) => {
          console.error('Student failed:', error);
          // Show error message to user
        }
      });
    }
  }
}