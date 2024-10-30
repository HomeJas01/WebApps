import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  @Input() productos: Producto[];
  @Input() textoBoton: string;

  @Output() productoSeleccionado: EventEmitter<number>;

  constructor(){
    this.productos = [];
    this.productoSeleccionado = new EventEmitter();
    this.textoBoton = '';

  }

  ngOnInit(): void {

  }

  onClick(indice : any){
    this.productoSeleccionado.emit(indice);
  }

}
