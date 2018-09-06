import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, ModuleWithProviders} from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { OrderModule } from './order/order.module';

import { SharedModule,
         HeaderComponent,
         FooterComponent,
         ApiService,
         ClientService
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    rootRouting,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ClientModule,
    OrderModule
  ],
  providers: [
    ApiService,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
