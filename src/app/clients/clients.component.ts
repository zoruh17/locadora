import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  client: any = { name: '', cpf: '', address: '' }; // Inicializa um cliente vazio

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // Obtém o ID da rota e converte para número
    const clientId = Number(this.route.snapshot.paramMap.get('id'));
    if (clientId) {
      // Busca o cliente pelo ID usando o serviço de dados
      const client = this.dataService.getClientById(clientId);
      if (client) {
        this.client = client; // Se o cliente for encontrado, atribui ao modelo
      } else {
        // Se o cliente não for encontrado, redireciona para a lista
        this.router.navigate(['/list']);
      }
    }
  }

  // Método para salvar as alterações
  onSubmit(): void {
    // Verifica se o cliente existe antes de salvar
    if (this.client && this.client.id) {
      // Atualiza os dados do cliente no serviço de dados
      this.dataService.updateClient(this.client);
    } else {
      // Se o cliente não tiver ID, cria um novo
      this.dataService.addClient(this.client);
    }
    // Redireciona para a lista após a atualização
    this.router.navigate(['/list']);
  }
  deleteClient(): void {
    this.dataService.deleteClient(this.client.id);
    this.router.navigate(['/list']);  // Redireciona de volta para a listagem
  }

  // Ação do botão "Voltar"
  cancel(): void {
    this.router.navigate(['/list']);  // Redireciona de volta para a listagem
  }
}
