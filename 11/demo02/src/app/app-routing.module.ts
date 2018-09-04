// 路由配置文件

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// 引入组件
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {UserComponent} from './user/user.component';

// 配置路由
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'user', component: UserComponent},
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
