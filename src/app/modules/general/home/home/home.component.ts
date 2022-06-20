import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  view: [number, number] = [700, 400];
  results = [
    {
      'name': 'Germany',
      'value': 8940000
    },
    {
      'name': 'Germany',
      'value': 8940000
    },
    {
      'name': 'Germany',
      'value': 8940000
    },
  ]
  constructor() {}

  ngOnInit(): void {

  }
}
