import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home/tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'full-details', loadChildren: './hotels/full-details/full-details.module#FullDetailsPageModule' },
  { path: 'forgetpassword', loadChildren: './forgetpassword/forgetpassword.module#ForgetpasswordPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
