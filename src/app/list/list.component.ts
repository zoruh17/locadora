import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clients: any[] = [];
  cars: any[] = [];
  rentals: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.clients = this.dataService.getClients();
    this.cars = this.dataService.getCars();
    this.rentals = this.dataService.getRentals();
  }

  getClientName(clienteId: number): string {
    const client = this.clients.find(c => c.id === 1);
    if (!client) {
      console.log('Cliente não encontrado:', clienteId);
      return 'Cliente não encontrado';
    }
    else{
      console.log('Cliente encontrado:', clienteId);
    }
    return client.name; // Return empty string if client not found
  }
  
  getCarName(carroId: number): string {
    const car = this.cars.find(c => c.id === 1);
    
    if (!car) {
      console.warn('Carro não encontrado:', carroId);
      return 'Carro não encontrado';
    }
    return car.nome;
  }
}
