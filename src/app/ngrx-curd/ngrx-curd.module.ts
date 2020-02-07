import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesPageComponent } from './entities-page/entities-page.component';
import { RouterModule, Routes } from '@angular/router';

const flexRoute: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'entity'
      },
      {
        path: 'entity',
        component: EntitiesPageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [EntitiesPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(flexRoute)
  ]
})
export class NgrxCurdModule { }
