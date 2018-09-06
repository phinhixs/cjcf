import { Injectable } from '@angular/core';

import { Article } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  ARTICLES: Article[] = [
    { id: 11, name: 'Melon' },
    { id: 12, name: 'Alcachofa' },
    { id: 13, name: 'Pomelo' },
    { id: 14, name: 'Cereza' },
    { id: 15, name: 'sasda' },
    { id: 16, name: 'asda' },
    { id: 17, name: 'dad' }
  ];

  constructor() { }
}
