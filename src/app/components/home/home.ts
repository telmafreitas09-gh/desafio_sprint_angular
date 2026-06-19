import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importante para usar as diretivas de estilo no Angular 20

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule], // Adicionamos o CommonModule aqui
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  // Variável que guardará a URL vinda da API
  urlImagemFundo: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
        this.urlImagemFundo = 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1920';
  }

  logout() {
    this.router.navigate(['/login']);
  }
}