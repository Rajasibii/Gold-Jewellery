import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  imports: [CommonModule],
  templateUrl: './top-nav-bar.html',
  styleUrls: ['./top-nav-bar.css'],
})
export class TopNavBar implements OnInit, OnDestroy {
  openDropdown: string | null = null; 
  isDropdownOpen(name: string): boolean {
    return this.openDropdown === name;
  }

  @ViewChildren('dropdownRef') dropdownRefs!: QueryList<ElementRef>;

  constructor(private router: Router, private elRef: ElementRef) {}

  toggleDropdown(name: string): void {
    this.openDropdown = this.openDropdown === name ? null : name;
  }

  goToContactPage(): void {
    this.openDropdown = null;
    this.router.navigate(['/contact']);
  }
  goToLoginPage(): void {
    this.openDropdown = null;
    this.router.navigate(['/login']);
  }
  goToSignupPage(): void {
    this.openDropdown = null;
    this.router.navigate(['/signup']);
  }
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    const clickedInsideAny = this.dropdownRefs.some((ref) =>
      ref.nativeElement.contains(event.target)
    );

    if (!clickedInsideAny) {
      this.openDropdown = null;
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
