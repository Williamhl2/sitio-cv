import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,
    RouterModule
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  opciones:{nombre:string,path:string}[]=[]

  constructor(private data:DataService){
  }


  ngOnInit(){
    this.opciones=[
      {
        nombre:'Inicio',
        path:'v1/home'
      },
      {
        nombre:'Experiencia',
        path:'v1/experiencia'
      },
      {
        nombre:'Educacion',
        path:'v1/educacion'
      },
      {
        nombre:'Habilidades',
        path:'v1/habilidades'
      },
      {
        nombre:'Inter',
        path:'v1/Inter'
      },
      {
        nombre:'Awards',
        path:'Awards'
      },
    ]

  }

  get nombre(){
    return this.data._nombre
  }

}
