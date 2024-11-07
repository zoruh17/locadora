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
  
    console.log('Clientes:', this.clients);
    console.log('Locações:', this.rentals);
  }
  

  getClientName(clienteId: string): string {
    console.log('Buscando cliente com ID:', clienteId);
    const client = this.clients.find(c => c.id.toString() === clienteId);
  
    if (!client) {
      console.warn('Cliente não encontrado:', clienteId);
      return 'Cliente não encontrado';
    }
    console.log('Cliente encontrado:', client.name);
    return client.name;
  }
  
  getCarName(carroId: string): string {
    console.log('Buscando carro com ID:', carroId);
    const car = this.cars.find(c => c.id.toString() === carroId);
  
    if (!car) {
      console.warn('Carro não encontrado:', carroId);
      return 'Carro não encontrado';
    }
    console.log('Carro encontrado:', car.nome);
    return car.nome;
  }
  
}
