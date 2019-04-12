import { MbscModule } from '@mobiscroll/angular-lite';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { HotelsPage } from './hotels.page';

const routes: Routes = [
  {
    path: '',
    component: HotelsPage
  }
];

@NgModule({
  imports: [ 
    MbscModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HotelsPage]
})
export class HotelsPageModule {}
