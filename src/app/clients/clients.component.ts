import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Client } from '../data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  client: Client = { id: 0, name: '', cpf: '', address: '' };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // Obtém o ID da rota e converte para número
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      // Busca o cliente pelo ID usando o serviço de dados
      const existingClient = this.dataService.getClientById(id);
      if (existingClient) {
        this.client = existingClient; // Se o cliente for encontrado, atribui ao modelo
      } else {
        // Se o cliente não for encontrado, redireciona para a lista
        this.router.navigate(['/list']);
      }
    }
  }
  // Método para salvar as alterações
  onSubmit(): void {
    // Verifica se o cliente existe antes de salvar
    if (this.client.id === 0) {
      this.dataService.addClient(this.client);
      // Atualiza os dados do cliente no serviço de dados
    } else {
      // Se o cliente não tiver ID, cria um novo
      this.dataService.updateClient(this.client);
    }
    // Redireciona para a lista após a atualização
    this.router.navigate(['/list']);
  }
  // Ação do botão "Voltar"
  cancel(): void {
    this.router.navigate(['/list']);  // Redireciona de volta para a listagem
  }
  deleteClient(): void {
    this.dataService.deleteClient(this.client.id);
    this.router.navigate(['/list']);  // Redireciona de volta para a listagem
  }
}
