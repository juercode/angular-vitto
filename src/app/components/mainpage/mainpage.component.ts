import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  sottoCartela = ['Cartella 1', 'Assicurazioni neve', 'Cartella 3', 'Cartella 4', 'Cartella impianti', 'Assicurazioni sci', 'Cartella 7', 'Cartella 8'];


  constructor() { }

  ngOnInit(): void {
  }

}
