import { Component, OnInit } from '@angular/core';

/**
This is an Vittoria component that displays a file upload interface with a title, icon, and upload button. The title and icon are centered horizontally and spaced using the flex and gap CSS properties. The upload button is displayed below them, centered horizontally using the flex and justify-center CSS properties. The button has a rounded border and a solid white background with a bold, navy blue text label. When clicked, it triggers a file upload event. Overall, this component has a clean and user-friendly design.
 */

@Component({
  selector: 'app-caricadocumento',
  templateUrl: './caricadocumento.component.html',
  styleUrls: ['./caricadocumento.component.css']
})
export class CaricadocumentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
