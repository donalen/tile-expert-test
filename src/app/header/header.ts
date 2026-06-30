import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchFilters } from './search-filters/search-filters';
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
  imports: [CommonModule, FontAwesomeModule, SearchFilters],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isSearchOpen = false;

  readonly faSearch = faSearch;
  readonly faCirclePlus = faCirclePlus;
  readonly faBell = faBell;
  readonly faLink = faLink;
  readonly faUsers = faUsers;
  readonly faHashtag = faHashtag;
  readonly faStar = faStar;
  readonly faClockRotateLeft = faClockRotateLeft;
  readonly faArrowLeft = faArrowLeft;
  readonly faBars = faBars;

  readonly menuItems = [
    { icon: faLink, text: 'Ссылки' },
    { icon: faUsers, text: 'Контакты' },
    { icon: faHashtag, text: 'Теги' },
    { icon: faStar, text: 'Избранное' },
    { icon: faClockRotateLeft, text: 'Посещения' },
  ];

  openSearch(): void {
    this.isSearchOpen = true;
  }

  closeSearch(): void {
    this.isSearchOpen = false;
  }
}
