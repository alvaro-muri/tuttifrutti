import { TuttifruttiFruitsComponent } from './tuttifrutti-fruits/tuttifrutti-fruits.component';
import { TuttifruttiAboutComponent } from './tuttifrutti-about/tuttifrutti-about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'fruits',
    pathMatch:'full'
  },
  {
    path:'fruits',
    component: TuttifruttiFruitsComponent
  },
  {
    path:'about',
    component: TuttifruttiAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
