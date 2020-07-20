import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceListComponent } from './Shared Components/price-list/price-list.component';
import { SwitchComponent } from './Shared Components/switch/switch.component';
import { InputStringComponent } from './Shared Components/input-string/input-string.component';
import { SigninComponent } from './Shared Components/signin/signin.component';





const routes: Routes = [
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
