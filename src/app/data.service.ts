import { Injectable } from '@angular/core';


export interface Car {
  id: number;
  nome: string;
  marca: string;
  placa: string;
  valorLocacao: number;
}

export interface Rental {
  id: number;
  clienteId: number;
  carroId: number;
  dias: number;
  valorTotal: number;
}

export interface Client {
  id: number;
  name: string;
  cpf: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cars: Car[] = [];
  private rentals: Rental[] = [];
  private clients: Client[] = [];

  private carsKey = 'cars';
  private rentalsKey = 'rentals';
  private clientsKey = 'clients';

  constructor() {
    const storedCars = localStorage.getItem(this.carsKey);
    this.cars = storedCars ? JSON.parse(storedCars) : [];
    const storedRentals = localStorage.getItem(this.rentalsKey);
    this.rentals = storedRentals ? JSON.parse(storedRentals) : [];
    const storedClients = localStorage.getItem(this.clientsKey);
    this.clients = storedClients ? JSON.parse(storedClients) : [];
  }

  // Retorna todos os clientes
  getClients(): Client[] {
    console.log('Clientes carregados:', this.clients);
    return this.clients;
  }

  // Obtém um cliente pelo ID
  getClientById(id: number): Client | undefined {
    return this.clients.find(client => client.id === id);
  }

  // Adiciona um cliente
  addClient(client: Client) {
    client.id = this.clients.length > 0 ? Math.max(...this.clients.map(c => c.id)) + 1 : 1;
    this.clients.push(client);
    this.saveClients();
  }

  // Atualiza um cliente
  updateClient(client: Client) {
    const index = this.clients.findIndex(c => c.id === client.id);
    if (index !== -1) {
      this.clients[index] = client;
      this.saveClients();
    }
  }

  // Exclui um cliente pelo ID
  deleteClient(id: number) {
    this.clients = this.clients.filter(client => client.id !== id);
    this.saveClients();
  }

  private saveClients() {
    localStorage.setItem(this.clientsKey, JSON.stringify(this.clients));
  }

  getCars(): Car[] {
    console.log(this.cars);
    return this.cars;
  }

  getCarById(carroId: number): Car | undefined {
    const car = this.cars.find(car => car.id === carroId); // Verifique se carroId é um número
    console.log(`Buscando carro com ID: ${carroId}, Encontrado:`, car);
    return car;
  }

  addCar(car: Car) {
    car.id = this.cars.length > 0 ? Math.max(...this.cars.map(c => c.id)) + 1 : 1;
    this.cars.push(car);
    this.saveCars();
  }

  updateCar(car: Car) {
    const index = this.cars.findIndex(c => c.id === car.id);
    if (index !== -1) {
      this.cars[index] = car;
      this.saveCars();
    }
  }

  deleteCar(id: number) {
    this.cars = this.cars.filter(car => car.id !== id);
    this.saveCars();
  }

  private saveCars() {
    localStorage.setItem(this.carsKey, JSON.stringify(this.cars));
  }

  // CRUD para locações
  getRentals(): Rental[] {
    console.log(this.rentals);
    return this.rentals;
  }

  getRentalById(rentalId: number): Rental | undefined {
    const rental = this.rentals.find(rental => rental.id === rentalId);
    console.log(`Buscando alocação com ID: ${rentalId}, Encontrado:`, rental);
    return rental;
  }

  addRental(rental: Rental) {
    rental.id = this.rentals.length > 0 ? Math.max(...this.rentals.map(r => r.id)) + 1 : 1;
    this.rentals.push(rental);
    this.saveRentals();
  }

  updateRental(rental: Rental) {
    const index = this.rentals.findIndex(r => r.id === rental.id);
    if (index !== -1) {
      this.rentals[index] = rental;
      this.saveRentals();
    }
  }

  deleteRental(id: number) {
    this.rentals = this.rentals.filter(r => r.id !== id);
    this.saveRentals();
  }

  private saveRentals() {
    localStorage.setItem(this.rentalsKey, JSON.stringify(this.rentals));
  }
}