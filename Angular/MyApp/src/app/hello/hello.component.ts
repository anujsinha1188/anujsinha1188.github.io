import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  /*
  template: `
            <p>
              Hello {{ courseName }}
            </p>
          `,
  */
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }
  courseName: string = 'Angular';
  changeName() {
    this.courseName = 'TypeScript';
  }

}
