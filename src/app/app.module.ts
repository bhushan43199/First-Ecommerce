import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared Components/header/header.component';
import { FooterComponent } from './Shared Components/footer/footer.component';
import { SliderComponent } from './Shared Components/slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SwitchComponent } from './Shared Components/switch/switch.component';
import { SrtingDirectiveDirective } from './Directives/srting-directive.directive';
import { InputStringComponent } from './Shared Components/input-string/input-string.component';



import { ReactiveFormsModule } from '@angular/forms';
import { PriceListComponent } from './Shared Components/price-list/price-list.component';
import { TableSortPipe } from './Shared Components/table-sort.pipe';
import { MyOrderByPipe } from './Shared Components/sort.pipe';
import { SearchPipe } from './Shared Components/search.pipe';
import { SigninComponent } from './Shared Components/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SwitchComponent,
    SrtingDirectiveDirective,
    InputStringComponent,
    PriceListComponent,
    TableSortPipe,
    MyOrderByPipe,
    SearchPipe,
    SigninComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [MyOrderByPipe, SearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
