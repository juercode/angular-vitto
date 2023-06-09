import { Component, OnInit, Input } from '@angular/core';

/**
This is a reusable component that displays a toast message indicating the progress of an ongoing operation. 
It includes an image icon, a message indicating the number of elements being loaded, and a close button.

 */

@Component({
  selector: 'app-caricamento',
  templateUrl: './caricamento.component.html',
  styleUrls: ['./caricamento.component.css']
})
export class CaricamentoComponent implements OnInit {

  @Input() number: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
