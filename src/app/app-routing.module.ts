import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pilot-list',
    loadChildren: () => import('./pages/pilot-list/pilot-list.module').then( m => m.PilotListPageModule)
  },
  {
    path: 'flight-list',
    loadChildren: () => import('./pages/flight-list/flight-list.module').then( m => m.FlightListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
