import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cartelle-details',
  templateUrl: './cartelle-details.component.html',
  styleUrls: ['./cartelle-details.component.css']
})
export class CartelleDetailsComponent implements OnInit {

  sottoCartela = ['Sottocartella 1', 'Sottocartella 2', 'Sottocartella 3', 'Sottocartella 4'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToPage(item: string) {
    this.router.navigate(['/path/to/page/sottocartella', encodeURIComponent(item)]);
  }  
}
