import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HotelreviewsComponent } from './hotelreviews/hotelreviews.component';
import { HotelphotosComponent } from './hotelphotos/hotelphotos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home/tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'description/:id', loadChildren: './hotels/full-details/full-details.module#FullDetailsPageModule' },
  { path: 'forgetpassword', loadChildren: './forgetpassword/forgetpassword.module#ForgetpasswordPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'facilitiestry/:id', loadChildren: './facilitiestry/facilitiestry.module#FacilitiestryPageModule' },
  { path: 'hotelreview/:id', component:HotelreviewsComponent },
  { path: 'hotelphotos/:id', component:HotelphotosComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
