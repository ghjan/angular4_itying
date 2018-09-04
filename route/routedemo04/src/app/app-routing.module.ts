// 路由配置文件

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// 引入组件
import {HomeComponent} from './home/home.component';
import {ShoplistComponent} from './shoplist/shoplist.component';
import {ShopComponent} from './shop/shop.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ShopcateComponent} from './shopcate/shopcate.component';

// 配置路由
const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [ // 配置子路由
      {
        path: 'welcome', component: WelcomeComponent,
      },
      {
        path: '**', /*任意的路由*/
        redirectTo: 'welcome'
      }
    ]
  },
  {
    path: 'shop', component: ShopComponent,
    children: [  // 配置子路由
      {path: 'shoplist', component: ShoplistComponent},
      {path: 'shopcate', component: ShopcateComponent},
      {
        path: '**', /*任意的路由*/
        redirectTo: 'shoplist'
      }
    ]
  },

  // 匹配不到路由的时候加载的组件 或者跳转的路由
  {
    path: '**', /*任意的路由*/
    // component: HomeComponent
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
