import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public name = 'Luke Brandon';
  public tabs: string[];
  public routes: string[];

  constructor() {
    this.tabs = ['Home', 'Education', 'Projects', 'About', 'Contact', 'Resume'];
    this.routes = ['/', '/education', '/projects', '/about', '/contact', '/resume'];
   }

  ngOnInit() {
  }

}
