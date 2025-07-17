import { Component } from '@angular/core';
import { TopNavBar } from '../top-nav-bar/top-nav-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [TopNavBar,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
