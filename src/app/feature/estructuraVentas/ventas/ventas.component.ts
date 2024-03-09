import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VentasDto } from '../../../core/dto/ventasdto';
import { VentasService } from '../../../core/service/ventas.service';
import { Subscribe } from 'rxjs/Observable';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent implements OnInit {
  public loginForm: FormGroup;
  public listVentas: VentasDto;

  data: any = {};

  constructor(private ventasService: VentasService) {}

  /*
 public async guardar(): Promise<void> {
    if(this.loginForm.valid){
      let codigo=this.loginForm.get('codigo').value;
      let nombre=this.loginForm.get('nombre').value;
      let categoria=this.loginForm.get('categoria').value;
      let marca=this.loginForm.get('marca').value;

      let precioUnit=this.loginForm.get('precioUnit').value;


      
      dtoventas={
        codigo,
        nombre,
        categoria,
        marca,
        precioUnit

      }
      console.log("esre es el dto", dtoventas)

    }else{
      alert("error")
    };
  }
  */
  llenarData() {
    this.ventasService.getVentas().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
  ngOnInit() {
    this.llenarData();
  }
}
