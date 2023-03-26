import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  selectedOption = 'option1';
  selectedOptionTwo = 'option2';
  options = [
    {label: 'Ultimi 7 giorni', value: 'option1'},
    {label: '1 Mese', value: 'option2'},
    {label: '3 Mese', value: 'option3'},
    {label: '6 Mese', value: 'option3'},
    {label: '1 anno', value: 'option3'},
  ];

  optionsTwo = [
    {label: 'Nome', value: 'option1'},
    {label: 'Recenti', value: 'option2'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
