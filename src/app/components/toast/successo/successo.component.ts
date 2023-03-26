import { Component, OnInit } from '@angular/core';

/**
This is a reusable component that displays a toast message indicating the progress of an success operation. 
It includes an image icon, a message indicating the number of elements being loaded.

 */

@Component({
  selector: 'app-successo',
  templateUrl: './successo.component.html',
  styleUrls: ['./successo.component.css']
})
export class SuccessoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
