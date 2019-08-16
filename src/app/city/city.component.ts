import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  left;
  right;
  bottom;
  @HostListener('document:click', ['$event'])
  click(e) {
    this.transform(e.clientX, e.clientY);
  }

  constructor() { }

  ngOnInit() {
    this.left = document.getElementById('left');
    this.right = document.getElementById('right');
    this.bottom = document.getElementById('bottom');
  }

  transform(X: number, Y: number) {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.left.style.transform = 'rotateY(' + (90 - (X / width * 90) + 40) + 'deg) rotateZ(' + (-15 * (Y / height)) + 'deg)';
    this.right.style.transform = 'rotateY(' + (((X / width) * -90) - 40) + 'deg) rotateZ(' + (15 * Y / height) + 'deg)';
  }
}
