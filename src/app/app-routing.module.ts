import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'v1',
    pathMatch:'full',
  },
  {
    path:'v1',
    loadChildren: () => import('./pages/pages.module').then(m=>m.PagesModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabledBlocking' })],  

  exports: [RouterModule]
})
export class AppRoutingModule { }
