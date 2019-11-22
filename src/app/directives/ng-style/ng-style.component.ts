import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {
  size = 14;
  color = 'red';
  font = '';

  constructor() {
  }

  ngOnInit() {
  }

}
