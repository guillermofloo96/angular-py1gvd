import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VentasComponent } from '../estructuraVentas/ventas/ventas.component';
import { VentaRoutingModule } from '../estructuraVentas/venta-routing.module';

@NgModule({
  imports: [
    CommonModule,
    VentaRoutingModule
  ],
  declarations: [
    VentasComponent
  ]
})
export class VentasModule { }