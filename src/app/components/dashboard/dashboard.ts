import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api';
import { FormsModule } from '@angular/forms'; // Necessário para a busca na tabela

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  allVehicles: any[] = [];          // Guarda os dados brutos da API
  selectedVehicle: any = null;      // Guarda o veículo selecionado no topo
  filtroVin: string = '';           // Texto digitado na busca por Código (VIN)

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getVehicles().subscribe({
      next: (data: any) => {
        // CORRIGIDO: Agora salvando na variável correta que você declarou no topo
        this.allVehicles = data; 
      },
      error: (err: any) => {
        console.error('Erro ao buscar dados do back-end', err);
      }
    });
  }

  // Evento acionado quando o usuário muda o Select de Modelos
  onModelChange(event: any): void {
    const modelSelected = event.target.value;
    const found = this.allVehicles.find(v => v.model === modelSelected);
    if (found) {
      this.selectedVehicle = found;
    }
  }

  // Função reativa que filtra a tabela com base no que foi digitado no VIN
  get filteredVehiclesTable() {
    if (!this.filtroVin.trim()) {
      return this.allVehicles;
    }
    return this.allVehicles.filter(v => 
      v.vin && v.vin.toLowerCase().includes(this.filtroVin.toLowerCase())
    );
  }
}
