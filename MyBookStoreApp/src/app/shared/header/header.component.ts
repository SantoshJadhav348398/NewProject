import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   title = "MY BOOK STORE";
   @Input() isAdmin;
   @Input() enableCarousel = false;
  constructor() { }

  ngOnInit(): void {
  }

}
