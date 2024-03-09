import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from '../estructuraVentas/ventas/ventas.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component: VentasComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class VentaRoutingModule { }