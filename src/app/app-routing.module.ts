import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'list', component: ListPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
