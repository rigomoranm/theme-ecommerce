import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LayoutComponent } from './main-layout/layout/layout.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
{ 

    path: '', 
      //canActivate: [AuthGuard],
      component: LayoutComponent,
      children:[
          {
            path:'home',
            component:HomeComponent
          }

      ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
