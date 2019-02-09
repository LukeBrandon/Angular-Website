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
  public color = 'bisque';

  constructor() {
    this.tabs = ['Home', 'Education', 'Projects', 'Contact', 'Resume'];
    this.routes = ['/', '/education', '/projects', '/contact', '/resume'];
   }

  ngOnInit() {
  }

  changeColor(color, changed) {
    if (changed === true) {
      this.color = 'red';
    } else {
      this.color = 'bisque';
    }
  }

}
