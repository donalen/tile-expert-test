import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSearch,
  faCirclePlus,
  faBell,
  faLink,
  faUsers,
  faHashtag,
  faStar,
  faClockRotateLeft,
  faArrowLeft,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isSearchOpen = false;

  faSearch = faSearch;
  faCirclePlus = faCirclePlus;
  faBell = faBell;
  faLink = faLink;
  faUsers = faUsers;
  faHashtag = faHashtag;
  faStar = faStar;
  faClockRotateLeft = faClockRotateLeft;
  faArrowLeft = faArrowLeft;
  faBars = faBars;

  openSearch(): void {
    this.isSearchOpen = true;
  }

  closeSearch(): void {
    this.isSearchOpen = false;
  }
}
