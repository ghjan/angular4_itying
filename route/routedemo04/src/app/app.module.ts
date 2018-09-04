import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {ShoplistComponent} from './shoplist/shoplist.component';
import {ShopComponent} from './shop/shop.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ShopcateComponent} from './shopcate/shopcate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoplistComponent,
    ShopComponent,
    WelcomeComponent,
    ShopcateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
