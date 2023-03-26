import { Component, OnInit } from '@angular/core';

/**

 It contains HTML code for displaying a header section with a title, a button for requesting a file extraction, 
 and a navigation link to go back to the previous page.

This component provides a simple and clean interface for displaying a header section with a title and action buttons,
as well as a navigation link to go back to the previous page.
 */

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
