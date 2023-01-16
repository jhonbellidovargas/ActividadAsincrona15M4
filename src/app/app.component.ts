import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: Array<any> = [];
  newData: any;
  nombre: string = '';
  apellido: string = '';
  carrera: string = '';
  id: number = 0;

  addData() {
    this.newData = {
      id: this.id++,
      nombre: this.nombre,
      apellido: this.apellido,
      carrera: this.carrera,
    };
    this.data.push(this.newData);
    this.nombre = '';
    this.apellido = '';
    this.carrera = '';
    console.log(this.data);
  }

  deleteData(id: number) {
    this.data = this.data.filter((item) => item.id !== id);
  }
}
