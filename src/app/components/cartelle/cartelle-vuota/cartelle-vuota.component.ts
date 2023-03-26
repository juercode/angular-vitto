import { Component, OnInit } from '@angular/core';

/**
The cartelle-vuota component displays a message and an icon indicating that a folder is empty.
It is typically used in file management interfaces to notify the user when a folder is empty and prompt them to upload new files.
*/

@Component({
  selector: 'app-cartelle-vuota',
  templateUrl: './cartelle-vuota.component.html',
  styleUrls: ['./cartelle-vuota.component.css']
})
export class CartelleVuotaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
