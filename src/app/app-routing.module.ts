import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { Routes } from '@angular/router';
import { FeatureModule } from './feature/feature.module';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./feature/feature.module").then(f =>f.FeatureModule)
  },
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
