import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-Tabla',
  templateUrl: './Tabla.component.html',
  styleUrls: ['./Tabla.component.css']
})
export class TablaComponent { 

  @Input() productos:any[] = [];



}

 


