import { Component } from '@angular/core';

@Component({
  selector: 'app-search-filters',
  imports: [],
  templateUrl: './search-filters.html',
  styleUrl: './search-filters.scss',
})
export class SearchFilters {
  readonly history = ['закрепить теги', 'кнопка', 'приложение', 'форма', 'текстовое поле'];

  readonly searchOptions = ['Я участник', 'Строгий поиск', 'В заголовках'];

  readonly onlyOptions = ['Теги', 'Просьбы', 'Контакты'];
}
