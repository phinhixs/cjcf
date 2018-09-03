import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ClientComponent } from './client.component';
import { SharedModule,
         ClientService
       } from '../shared';

const clientRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: ClientComponent,
    resolve: {

    }
  }
]);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    clientRouting
  ],
  entryComponents: [ClientComponent],
  declarations: [
    ClientComponent
  ],
  bootstrap: [ClientComponent],
  providers: [
    ClientService
  ]
})
export class ClientModule { }
