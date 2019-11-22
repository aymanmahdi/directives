import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.scss']
})
export class FilsComponent implements OnInit {
   @Input() pereColor: string;
  constructor() { }

  ngOnInit() {
  }

}
