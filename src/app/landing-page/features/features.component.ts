import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY;
    this.isScrolled = offset > 50;
}
}