import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-agency',
  templateUrl: './search-agency.component.html',
  styleUrls: ['./search-agency.component.css']
})
export class SearchAgencyComponent implements OnInit {
  filteredCartelaItems: any[] = [];
  searchText: string = '';
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
    { name: 'Garda 3301', type: 'Agenzia' },
    { name: 'Garda 3302', type: 'Agenzia' },
    { name: 'Garda 3303', type: 'Agenzia' },
    { name: 'Garda 3304', type: 'Agenzia' },
    { name: 'Garda 3305', type: 'Agenzia' },
    { name: 'Garda 3306', type: 'Agenzia' },
    { name: 'Garda 3307', type: 'Agenzia' },
    { name: 'Garda 3301', type: 'Agenzia' },
    { name: 'Garda 3302', type: 'Agenzia' },
    { name: 'Garda 3303', type: 'Agenzia' },
    { name: 'Garda 3304', type: 'Agenzia' },
    { name: 'Garda 3305', type: 'Agenzia' },
    { name: 'Garda 3306', type: 'Agenzia' },
    { name: 'Garda 3307', type: 'Agenzia' },
    { name: 'Garda 3301', type: 'Agenzia' },
    { name: 'Garda 3302', type: 'Agenzia' },
    { name: 'Garda 3303', type: 'Agenzia' },
    { name: 'Garda 3304', type: 'Agenzia' },
    { name: 'Garda 3305', type: 'Agenzia' },
    { name: 'Garda 3306', type: 'Agenzia' },
    { name: 'Garda 3307', type: 'Agenzia' },
    { name: 'Garda 3301', type: 'Agenzia' },
    { name: 'Garda 3302', type: 'Agenzia' },
    { name: 'Garda 3303', type: 'Agenzia' },
    { name: 'Garda 3304', type: 'Agenzia' },
    { name: 'Garda 3305', type: 'Agenzia' },
    { name: 'Garda 3306', type: 'Agenzia' },
    { name: 'Garda 3307', type: 'Agenzia' },
  ];

  currentPage = 1;
  itemsPerPage = 24;
  filterText = '';

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

  filteredItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.cartelaItems
      .filter(item => {
        const searchText = this.searchText.toLowerCase();
        return item.name.toLowerCase().includes(searchText) || item.type.toLowerCase().includes(searchText);
      })
      .slice(startIndex, endIndex);
  }
}
