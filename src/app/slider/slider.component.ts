import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  images = ['https://sham.hussam3bd.com/dist/images/slides/01.jpg','https://sham.hussam3bd.com/dist/images/slides/03.jpg','https://sham.hussam3bd.com/dist/images/slides/02.jpg'];

}
