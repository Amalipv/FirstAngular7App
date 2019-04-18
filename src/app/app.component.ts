import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-customers></app-customers>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My First Ever Angular 7 App';
  message = `Hello, this is Amali. And, this is cool. 
  Diving directly into angular 7. I love to crochet and learn new things
  `;

  ngOnInit(){
    this.title= "Hey, This is cool.";
  }
}
