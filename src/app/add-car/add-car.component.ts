import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Car} from '../data.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  car: Car = { id: 0, nome: '', marca: '', placa: '', valorLocacao: 0 };

  constructor(private dataService: DataService, private router: Router) {}

  onSubmit() {
    this.dataService.addCar(this.car);
    this.router.navigate(['/list']);
  }

  cancel() {
    this.router.navigate(['/list']);
  }
}