import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: String = 'http://loiane.com';
  cursoAngular: Boolean = true;
  urlImagem: String = 'http://lorempixel.com/400/200/';


  constructor() { }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return false;
  }

  ngOnInit() {
  }

}
