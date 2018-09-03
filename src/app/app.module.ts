import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, ModuleWithProviders} from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';

import { SharedModule,
         HeaderComponent,
         FooterComponent,
         ApiService,
         ClientService
} from './shared';
import { OrderComponent } from './order/order.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    OrderComponent
  ],
  imports: [
    rootRouting,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ClientModule
  ],
  providers: [
    ApiService,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
