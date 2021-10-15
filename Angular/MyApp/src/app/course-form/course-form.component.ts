import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course = new Course(1, 'Angular', '5 days');
  submitted = false;

  onSubmit() { this.submitted = true; }

}
