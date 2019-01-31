import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1GrayStyle: boolean = false

  constructor() { }

  ngOnInit() {
  }

  firstClick() {
    this.h1GrayStyle = !this.h1GrayStyle;
  }
}
