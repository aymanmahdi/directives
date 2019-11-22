import {Component, Input, OnInit} from '@angular/core';
import {NgModule} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  color: string;
  defaultcolor = 'red';

  constructor() {
  }

  changecolor(colorinput: string) {
    this.color = colorinput;
  }

  rest() {
    this.color = this.defaultcolor;
  }

  ngOnInit() {
  }
}
