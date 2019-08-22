import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonMaterialModule } from '../material.module';
import { CardComponent } from './card/card.component';
import { FullDemoComponent } from './full-demo/full-demo.component';
import { ReactiveFormsModule } from '@angular/forms';

const flexRoute: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'full-demo',
        component: FullDemoComponent
      }
    ]
  }
];

@NgModule({
  declarations: [HomeComponent, CardComponent, FullDemoComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CommonMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(flexRoute)
  ]
})
export class FlexModule {}
