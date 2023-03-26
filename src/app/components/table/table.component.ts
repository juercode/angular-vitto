import { Component, OnInit } from '@angular/core';

/**
This component is responsible for displaying a list of files along with their metadata. 
It provides pagination functionality to navigate between different pages of files.

---------------------------------------------------------------------

Input Properties

orders: An array of orders containing information about files.
itemsPerPage: The number of files to be displayed per page.

---------------------------------------------------------------------

Functionality

The component displays a table of files and their metadata.
The component provides pagination functionality to navigate between different pages of files.
The component displays the total number of files and the current page number.

 */

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  Math = Math;

  orders = [
    {
      documentName: 'Documents 1',
      dataModifica: '11 / 02  / 2023',
      dataSize: '0.98 KB',
      iconUrl: '/assets/icons/pdf.svg'
    },
    {
      documentName: 'Documents 2',
      dataModifica: '11 / 02 / 2023',
      dataSize: '0.98 KB',
      iconUrl: '/assets/icons/pictures.svg'
    },
    {
      documentName: 'Documents 3',
      dataModifica: '11 / 02 / 2023',
      dataSize: '0.98 KB',
      iconUrl: '/assets/icons/word.svg'
    },
    {
      documentName: 'Documents 4',
      dataModifica: '11 / 02 / 2023',
      dataSize: '0.98 KB',
      iconUrl: '/assets/icons/excel.svg'
    },
    {
      documentName: 'Documents 5',
      dataModifica: '06 / 02 / 2023',
      dataSize: '0.98 KB',
      iconUrl: '/assets/icons/pdf.svg'
    },
    {
      documentName: 'Documents 6',
      dataModifica: '06 / 02 / 2023',
      dataSize: '0.98 KB',
      iconUrl: '/assets/icons/pictures.svg'
    },
    {
      documentName: 'Documents 7',
      dataModifica: '06 / 02 / 2023',
      dataSize: '0.98 KB',
      iconUrl: '/assets/icons/word.svg'
    },
    {
      documentName: 'Documents 8',
      dataModifica: '06 / 02 / 2023',
      dataSize: '0.98 KB',
      iconUrl: '/assets/icons/excel.svg'
    },
    {
      documentName: 'Documents 9',
      dataModifica: '06 / 02 / 2023',
      dataSize: '0.98 KB',
      iconUrl: '/assets/icons/pdf.svg'
    },
    {
      documentName: 'Documents 10',
      dataModifica: '06 / 02 / 2023',
      dataSize: '0.98 KB',
      iconUrl: '/assets/icons/excel.svg'
    }
  ];

  currentPage = 1;
  itemsPerPage = 4;

  constructor() { }

  ngOnInit(): void {
  }

  getTotalPages(): number {
    return Math.ceil(this.orders.length / this.itemsPerPage);
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
