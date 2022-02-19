import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CustomersHostComponent} from './customers-host/customers-host.component';
import {CustomersDetailsComponent} from './customers-details/customers-details.component';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CustomersHostComponent,
    CustomersDetailsComponent,
    CustomersListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
