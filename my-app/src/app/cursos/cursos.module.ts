import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent, CursosDetalheComponent
  ],
  declarations: [CursosComponent, CursosDetalheComponent]
})
export class CursosModule { }
