import { Component } from '@angular/core';
import { StudentService } from '../service/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  StudentList: [];
  constructor(private studentservice: StudentService){
    this.StudentList=[];
     this.getStudentList();
  }

  getStudentList(){
   
    this.studentservice.getStudentList().subscribe({
        next: (response) => {
          console.log('studnet successful:', response);
          this.StudentList=response;
          // You can navigate or show a message here

        },
        error: (error) => {
          console.error('Login failed:', error);
          // Show error message to user
        }
      });

  }
}
