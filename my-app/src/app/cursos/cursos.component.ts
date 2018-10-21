import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: String[];

  constructor(private cursosService: CursosService) { // Quando se declara desta maneira o Angular automaticamente injeta a dependência
    this.nomePortal = 'http://loiane.training';
    // const servico = new CursosService();
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
