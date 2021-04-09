import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatStepperModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { WebHeaderComponent } from './web-header/web-header.component';
import { WebFooterComponent } from './web-footer/web-footer.component';
import { WebLayoutComponent } from './web-layout/web-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    WebHeaderComponent,
    WebFooterComponent,
    WebLayoutComponent
  ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              BrowserAnimationsModule,
              MatStepperModule,
              FormsModule,
              CommonModule,
              MatFormFieldModule,
              ReactiveFormsModule,
              MatInputModule
            ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
