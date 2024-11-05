import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Rental, Car, Client } from '../data.service';

@Component({
  selector: 'app-add-rental',
  templateUrl: './add-rental.component.html',
  styleUrls: ['./add-rental.component.css']
})
export class AddRentalComponent implements OnInit {
  rentals: Rental[] = [];
  clients: Client[] = [];
  cars: Car[] = [];
  rental: Rental = { id: 0, clienteId: 0, carroId: 0, dias: 1, valorTotal: 0 };

  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.cars = this.dataService.getCars();
    this.rentals = this.dataService.getRentals();
    this.clients = this.dataService.getClients();
  }  

  calculateTotal() {
    console.log('ID do carro:', this.rental.carroId); // Verifique o ID do carro
    const carroId = Number(this.rental.carroId); // Garantir que carroId seja um número
    const car = this.dataService.getCarById(carroId);
    
    if (car) {
      this.rental.valorTotal = car.valorLocacao * this.rental.dias; // Calcule o valor total
      console.log('Valor total calculado:', this.rental.valorTotal);
    } else {
      this.rental.valorTotal = 0;
      console.warn('Carro não encontrado:', carroId);
    }
  }

  editRental(rental: Rental) {
    this.rental = { ...rental };
  }

  deleteRental(id: number) {
    this.dataService.deleteRental(id);
    this.rentals = this.dataService.getRentals();
  }

  onSubmit(): void {
    // Verifica se o cliente existe antes de salvar
    if (this.rental && this.rental.id) {
      // Atualiza os dados do cliente no serviço de dados
      this.dataService.updateRental(this.rental);
    } else {
      // Se o cliente não tiver ID, cria um novo
      this.dataService.addRental(this.rental);
    }
    // Redireciona para a lista após a atualização
    this.router.navigate(['/list']);
  }
  // Ação do botão "Voltar"
  cancel(): void {
    this.router.navigate(['/list']);  // Redireciona de volta para a listagem
  }
}