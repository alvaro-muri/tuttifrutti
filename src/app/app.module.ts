import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';

import { FormsModule } from '@angular/forms';
import { TuttifruttiAboutComponent } from './tuttifrutti-about/tuttifrutti-about.component';
import { TuttifruttiFruitsComponent } from './tuttifrutti-fruits/tuttifrutti-fruits.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';


@NgModule({
  declarations: [
    AppComponent,
    FruitListComponent,
    TuttifruttiAboutComponent,
    TuttifruttiFruitsComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
