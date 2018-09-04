import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {AppRoutingModule} from './app-routing.module';
import {UserComponent} from './user/user.component';
import { NewscontentComponent } from './newscontent/newscontent.component';
import { ShoplistComponent } from './shoplist/shoplist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    UserComponent,
    NewscontentComponent,
    ShoplistComponent
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
