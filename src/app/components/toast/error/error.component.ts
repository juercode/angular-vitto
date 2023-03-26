import { Component, OnInit } from '@angular/core';

/**
This is a reusable component that displays a toast message indicating the progress of an error operation. 
It includes an image icon, a message indicating the number of elements being loaded.

 */

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
