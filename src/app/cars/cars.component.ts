import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Car } from '../data.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  car: Car = { id: 0, nome: '', marca: '', placa: '', valorLocacao: 0};
  
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verificar se estamos editando um produto
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      // Carregar o produto existente para edição
      const existingCar = this.dataService.getCarById(id);
      if (existingCar) {
        this.car = existingCar; // Atribuir o produto encontrado ao modelo
      } else {
        // Se o produto não for encontrado, redireciona para a lista
        this.router.navigate(['/list']);
      }
    }
  }

  onSubmit() {
    if (this.car.id === 0) {
      // Novo produto
      this.dataService.addCar(this.car);  // O ID será gerado no serviço de dados
    } else {
      // Produto existente, atualiza os dados
      this.dataService.updateCar(this.car);
    }
    // Redireciona para a lista de produtos após salvar
    this.router.navigate(['/list']);
  }

  cancel() {
    // Redireciona para a lista de produtos ao cancelar
    this.router.navigate(['/list']);
  }

  deleteCar(): void {
    this.dataService.deleteCar(this.car.id);
    this.router.navigate(['/list']);  // Redireciona de volta para a listagem
  }
}