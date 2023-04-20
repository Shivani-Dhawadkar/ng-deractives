import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { productComponent } from './product/product.component';
import { shivanicomponent } from './shivani/shivani.component';
import { productsComponent  } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { SkillsetsComponent } from './skillsets/skillsets.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    productComponent,
    productsComponent,
    shivanicomponent,
    SkillsetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
