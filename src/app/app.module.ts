import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientsComponent } from './clients/clients.component'
import { AddCarComponent } from './add-car/add-car.component';
import { CarsComponent } from './cars/cars.component';
import { AddRentalComponent } from './add-rental/add-rental.component';
import { RentalsComponent } from './rentals/rentals.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddClientComponent,
    ClientsComponent,
    AddCarComponent,
    CarsComponent,
    AddRentalComponent,
    RentalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    RouterModule // Já está correto, mantendo-o aqui
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }