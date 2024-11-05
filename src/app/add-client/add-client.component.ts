import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Client } from '../data.service'; // Certifique-se de importar o serviço de dados

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  client: Client = { id: 0, name: '', cpf: '', address: '' };

  constructor(private dataService: DataService, private router: Router) {}

  // Método para enviar os dados do formulário
  onSubmit() {
    this.dataService.addClient(this.client); // Adiciona o cliente
    this.router.navigate(['/list']); // Redireciona para a página de listagem
  }

  cancel() {
    this.router.navigate(['/list']);
  }
}