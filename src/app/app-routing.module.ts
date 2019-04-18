import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home/tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'full-details', loadChildren: './hotels/full-details/full-details.module#FullDetailsPageModule' },
  { path: 'description', loadChildren: './description/description.module#DescriptionPageModule' },
  { path: 'facilities', loadChildren: './hotels/full-details/facilities/facilities.module#FacilitiesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
