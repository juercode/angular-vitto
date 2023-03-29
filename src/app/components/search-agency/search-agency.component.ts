import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-agency',
  templateUrl: './search-agency.component.html',
  styleUrls: ['./search-agency.component.css']
})
export class SearchAgencyComponent implements OnInit {

  totalPages: number = 0;
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

  setTotalPages(numberToSet: number): void {
    this.totalPages = Math.ceil(numberToSet / this.itemsPerPage);
  }

  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  onPrevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  filteredItems(): { total: number, currentPageResults: any[] } {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const filteredItems = this.cartelaItems
      .filter(item => {
        const searchText = this.searchText.toLowerCase();
        return item.name.toLowerCase().includes(searchText) || item.type.toLowerCase().includes(searchText);
      });

    this.setTotalPages(filteredItems.length);

    return {
      total: filteredItems.length,
      currentPageResults: filteredItems.slice(startIndex, endIndex)
    };
  }
}
