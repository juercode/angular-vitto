import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-agency',
  templateUrl: './search-agency.component.html',
  styleUrls: ['./search-agency.component.css']
})
export class SearchAgencyComponent implements OnInit {
  Math = Math;
  @Input() newCartelaItems: string[] = [];

  cartelaItems = [
    { name: 'Garda 3301', type: 'Agenzia' },
    { name: 'Garda 3302', type: 'Agenzia' },
    { name: 'Garda 3303', type: 'Agenzia' },
    { name: 'Garda 3304', type: 'Agenzia' },
    { name: 'Garda 3305', type: 'Agenzia' },
    { name: 'Garda 3306', type: 'Agenzia' },
    { name: 'Garda 3307', type: 'Agenzia' },
    { name: 'Garda 3308', type: 'Agenzia' },
    { name: 'Garda 3309', type: 'Agenzia' },
    { name: 'Garda 3310', type: 'Agenzia' },
    { name: 'Garda 3311', type: 'Agenzia' },
    { name: 'Garda 3312', type: 'Agenzia' },
    { name: 'Garda 3313', type: 'Agenzia' },
    { name: 'Garda 3314', type: 'Agenzia' },
    { name: 'Garda 3315', type: 'Agenzia' },
    { name: 'Garda 3316', type: 'Agenzia' },
    { name: 'Garda 3307', type: 'Agenzia' },
    { name: 'Garda 3308', type: 'Agenzia' },
    { name: 'Garda 3309', type: 'Agenzia' },
    { name: 'Garda 3310', type: 'Agenzia' },
    { name: 'Garda 3311', type: 'Agenzia' },
    { name: 'Garda 3312', type: 'Agenzia' },
    { name: 'Garda 3313', type: 'Agenzia' },
    { name: 'Garda 3314', type: 'Agenzia' },
    { name: 'Garda 3315', type: 'Agenzia' },
    { name: 'Garda 3307', type: 'Agenzia' },
    { name: 'Garda 3308', type: 'Agenzia' },
    { name: 'Garda 3309', type: 'Agenzia' },
    { name: 'Garda 3310', type: 'Agenzia' },
    { name: 'Garda 3311', type: 'Agenzia' },
    { name: 'Garda 3312', type: 'Agenzia' },
    { name: 'Garda 3313', type: 'Agenzia' },
    { name: 'Garda 3314', type: 'Agenzia' },
    { name: 'Garda 3315', type: 'Agenzia' },
  ];

  currentPage = 1;
  itemsPerPage = 24;

  constructor() { }

  ngOnInit(): void {
  }

  getTotalPages(): number {
    return Math.ceil(this.cartelaItems.length / this.itemsPerPage);
  }

  onNextPage(): void {
    const totalPages = this.getTotalPages();
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  onPrevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

}
