import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Client, ClientService, Article, ArticleService } from '../shared';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  articleCtrl = new FormControl();
  articleFormGroup: FormGroup;
  selectedArticle: Article;
  filteredArticles: Observable<Article[]>;
  articles: Article[];
  allArticle: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  isLinear = false;
  clientCtrl = new FormControl();
  clientFormGroup: FormGroup;
  clients: Client[];
  selectedClient: Client;
  filteredClients: Observable<Client[]>;

  @ViewChild('articleInput') articleInput: ElementRef<HTMLInputElement>;

  constructor(
    private _formBuilder: FormBuilder,
    clientService: ClientService,
    articleService: ArticleService
    ) {
      this.clients = clientService.CLIENTS;
      this.articles = articleService.ARTICLES;

      this.filteredArticles = this.articleCtrl.valueChanges.pipe(
        startWith(null),
        map(value => typeof value === 'string' ? value : value.name),
        map((articles: Article | null) => articles ? this._filter(articles) : this.allArticle.slice())
      );
      // this.filteredClients = this.clientCtrl.valueChanges
      // .pipe(
      //   startWith<string | Client>(''),
      //   map(value => typeof value === 'string' ? value : value.name),
      //   map(name => name ? this._filter(name) : this.clients.slice())
      // );
    }

  ngOnInit() {
    this.filteredClients = this.clientCtrl.valueChanges
      .pipe(
        startWith<string | Client>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.clients.slice())
      );

    this.clientFormGroup = this._formBuilder.group({
    });

    this.clientFormGroup.addControl('clientCtrl', this.clientCtrl);

    this.articleFormGroup = this._formBuilder.group({
    });

    this.articleFormGroup.addControl('articleCtrl', this.articleCtrl);
  }

  displayFn(client?: Client): string | undefined {
    return client ? client.name : undefined;
  }

  private _filter(name: string): Client[] {
    const filterValue = name.toLowerCase();

    return this.clients.filter(client => client.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
