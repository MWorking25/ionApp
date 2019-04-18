import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FacilitiesComponent } from './facilities/facilities.component';
import { HotelsPage } from './hotels.page';

const routes: Routes = [
  {
    path: '',
    component: HotelsPage
  },
  {
    path:'description/:id',
    loadChildren:'./full-details/full-details.module#FullDetailsPageModule'
  },
  {
    path: 'description/:id/facilities',
    component: FacilitiesComponent
  }

];

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HotelsPage, FacilitiesComponent]
})
export class HotelsPageModule {}
