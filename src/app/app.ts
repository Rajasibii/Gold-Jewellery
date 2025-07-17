import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBar } from './top-nav-bar/top-nav-bar';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TopNavBar, RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Gold_Jewellery';
  shouldShowNavbar = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const hiddenRoutes = ['/login', '/signup'];
        this.shouldShowNavbar = !hiddenRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
}
