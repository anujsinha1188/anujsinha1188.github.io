import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: string = 'I\'m a nested component';
  ngOnChanges(changes: any) {
    console.log('changes in child:' + JSON.stringify(changes));
  }

}
