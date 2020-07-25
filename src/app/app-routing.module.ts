import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceListComponent } from './Shared Components/price-list/price-list.component';
import { SwitchComponent } from './Shared Components/switch/switch.component';
import { InputStringComponent } from './Shared Components/input-string/input-string.component';
import { SigninComponent } from './Shared Components/signin/signin.component';
import { HomeComponent } from './Shared Components/home/home.component';





const routes: Routes = [
  {
    path : '',
    redirectTo : 'signin',
    pathMatch: 'full'
  },
  {path:"homepage", component:HomeComponent},
  {
    path : 'price',
    component: PriceListComponent
  },
  {
    path : 'switch',
    component: SwitchComponent
  },
  {
    path : 'input',
    component: InputStringComponent
  },
   {
    path : 'signin',
    component: SigninComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
