import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1GrayStyle: boolean = false

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  click() {
    this.h1GrayStyle = !this.h1GrayStyle;
    this.data.click();
  }
}
