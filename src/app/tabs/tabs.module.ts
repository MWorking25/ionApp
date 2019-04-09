import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
 {
    path: '',
    component: TabsPage,
    children:
      [
        {
          path: 'hotels',
          children:
            [
              {
                path: '',
                loadChildren: '../hotels/hotels.module#HotelsPageModule'
              }
            ]
        },
        {
          path: 'restro',
          children:
            [
              {
                path: '',
                loadChildren: '../restro/restro.module#RestroPageModule'
              }
            ]
        },
        {
          path: 'journey',
          children:
            [
              {
                path: '',
                loadChildren: '../journey/journey.module#JourneyPageModule'
              }
            ]
        },
        {
          path: 'profile',
          children:
            [
              {
                path: '',
                loadChildren: '../profile/profile.module#ProfilePageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: 'hotels',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: 'hotels',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
