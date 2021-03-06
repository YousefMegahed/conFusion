import { DishService } from './services/dish.service';
import { MaterialModule } from '@angular/material';



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule } from '@angular/forms';
import{ HttpModule } from '@angular/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpModule,
   //FlexLayoutModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
