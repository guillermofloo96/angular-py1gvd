import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  declarations: [
    FeatureComponent
  ]
})
export class FeatureModule { }