import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartelle',
  templateUrl: './cartelle.component.html',
  styleUrls: ['./cartelle.component.css']
})
export class CartelleComponent {


  @Input() newCartelaItems: string[] = [];

  constructor(private router: Router) {}


  cartelaItems = ['Cartella 1', 'Assicurazioni neve', 'Cartella 3', 'Cartella 4', 'Cartella impianti', 'Assicurazioni sci', 'Cartella 7', 'Cartella 8'];
  sottoCartela = ['Cartella 1', 'Assicurazioni neve', 'Cartella 3', 'Cartella 4'];

  
  redirectToPage(item: string) {
    this.router.navigate(['/path/to/page', encodeURIComponent(item)]);
  }  
  
}
