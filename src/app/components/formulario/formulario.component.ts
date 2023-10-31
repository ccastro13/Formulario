import { Component } from '@angular/core';
import { Producto } from 'src/app/data/producto.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  id:number;
  nombre:string;
  precio:number;
  cantidad:number;
  guardado:boolean;

  
  productos:Producto[] = [];

  agregarProducto(){
    let producto: Producto={
      id:this.id,
      nombre:this.nombre,
      precio:this.precio,
      cantidad:this.cantidad 
    }
    this.productos.push(producto);
    this.guardado=true;
  }

  eliminarProducto(index:number){
    this.productos.splice(index,1);
  }
}







