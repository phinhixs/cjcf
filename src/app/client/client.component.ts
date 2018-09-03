import { Component, OnInit } from '@angular/core';
import { Client, ClientService} from '../shared';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[];
  selectedClient: Client;

  myControl = new FormControl();
  filteredClients: Observable<Client[]>;



  constructor(clientService: ClientService) {
    this.clients = clientService.CLIENTS;
  }

  ngOnInit() {
    this.filteredClients = this.myControl.valueChanges
      .pipe(
        startWith<string | Client>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.clients.slice())
      );
  }

  displayFn(client?: Client): string | undefined {
    return client ? client.name : undefined;
  }

  private _filter(name: string): Client[] {
    const filterValue = name.toLowerCase();

    return this.clients.filter(client => client.name.toLowerCase().indexOf(filterValue) === 0);
  }

  next() {
    console.log(this.myControl);
  }

}
