import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})

export class CustomersComponent implements OnInit{
  title: string;
  people: ICustomer[];
  msg : string;
  msgColor: string;
  flag= true;

  shQuote(){
    this.flag= !this.flag;
  }

  constructor(){
    this.msg = "Don't give up now, Chances are your best kiss, hardest laugh and the greatest day are yet to come." ;
    this.msgColor = 'Grey';
  }

  ngOnInit(){
    this.title= 'Registered Customers in our website';
    this.people = [
      { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
      { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
      { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
      { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)}
    ];
  }
}