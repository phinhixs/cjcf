import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Client, ClientService } from '../shared';

import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  isLinear = false;
  clientCtrl = new FormControl();
  clientFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  clients: Client[];
  selectedClient: Client;
  filteredClients: Observable<Client[]>;


  constructor(
    private _formBuilder: FormBuilder,
    clientService: ClientService) {
      this.clients = clientService.CLIENTS;
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

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  displayFn(client?: Client): string | undefined {
    return client ? client.name : undefined;
  }

  private _filter(name: string): Client[] {
    const filterValue = name.toLowerCase();

    return this.clients.filter(client => client.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
