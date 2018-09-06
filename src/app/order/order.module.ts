import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { SharedModule,
  ClientService
} from '../shared';

const clientRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: OrderComponent,
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
  declarations: [
    OrderComponent
  ]
})
export class OrderModule { }
