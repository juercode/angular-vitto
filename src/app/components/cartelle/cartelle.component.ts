import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


/**
This component displays a list of folder items with their names and icons.
The user can click on a folder item to navigate to a specific page.
The component also contains two arrays, cartelaItems, and sottoCartela, which are used to populate the list of folder items.
*/



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
