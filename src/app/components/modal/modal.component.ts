import { Component, OnInit } from '@angular/core';

/**
This is an Vittoria component that displays a confirmation message with a description before uploading a document.
 It includes a confirmation message, description, and two buttons for canceling or proceeding with the upload. 
 */

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
