import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParseInvoiceComponent } from './parse-invoice/parse-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    ParseInvoiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
