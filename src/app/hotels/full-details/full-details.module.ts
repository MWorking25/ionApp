import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FullDetailsPage } from './full-details.page';

const routes: Routes = [
  {
    path: '',
    component: FullDetailsPage
  },
  { path: 'facilitiestry/:id', loadChildren: '../../facilitiestry/facilitiestry.module#FacilitiestryPageModule', pathMatch: 'full' },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [FullDetailsPage],
  entryComponents: []
})
export class FullDetailsPageModule {}
