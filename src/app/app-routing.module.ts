import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientsComponent } from './clients/clients.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarsComponent } from './cars/cars.component';
import { AddRentalComponent } from './add-rental/add-rental.component';
import { RentalsComponent } from './rentals/rentals.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: 'clients/:id', component: ClientsComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: 'cars/:id', component: CarsComponent },
  { path: 'add-rental', component: AddRentalComponent },
  { path: 'rentals/:id', component: RentalsComponent },
  { path: 'cars/:id', component: RentalsComponent },
  { path: 'clients/:id', component: RentalsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
