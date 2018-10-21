import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent, CursosDetalheComponent
  ],
  declarations: [CursosComponent, CursosDetalheComponent],
  providers: [CursosService]

})
export class CursosModule { }
