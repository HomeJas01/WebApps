import { Component } from '@angular/core';
import { PersonajesService } from './personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrPersonajes: any [] = [];

  currentPage: number;
  numPages: number;

  constructor(private PersonajesService: PersonajesService){
    this.currentPage = 1;
    this.numPages = 1;
  }

  ngOnInit(){
    this.PersonajesService.getAll().subscribe({
      next:(data) => {
        this.arrPersonajes = data['results'] //Asigna los datos recibidos a la variable local
        this.numPages = data['info']['pages'];
        console.log('Data:' , this.arrPersonajes) //Muestra los datos en la consola
      },
      error:(err) =>{
        console.error('Error al obtener los datos:', err);
      }
    });
  }
   async changePage(siguiente : any){
    if(siguiente){
      this.currentPage ++;
    }else{
      this.currentPage --;
    }
    const response = await this.PersonajesService.getAll(this.currentPage).subscribe({
      next:(response) =>{
        this.arrPersonajes = response['results'];
      }
    });


  }
}
