import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.scss']
})
export class PereComponent implements OnInit {
@Input() color: 'red';
  constructor() { }

  ngOnInit() {
  }

}
