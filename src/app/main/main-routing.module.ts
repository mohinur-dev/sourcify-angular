import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { RetailerComponent } from './components/retailer/retailer.component';
import { ManufacturerComponent } from './components/manufacturer/manufacturer.component';
import { RetailerSigninComponent } from './registration/retailer-signin/retailer-signin.component';
import { RetailerSignupComponent } from './registration/retailer-signup/retailer-signup.component';
import { ManufecturearSigninComponent } from './registration/manufecturear-signin/manufecturear-signin.component';
import { ManufecturearSignupComponent } from './registration/manufecturear-signup/manufecturear-signup.component';
import { AdminSigninComponent } from './registration/admin-signin/admin-signin.component';

const routes: Routes = [
  {path:'', component:MainComponent, children:[
    {path:'', component:RetailerComponent},
    {path:'ratailer', component:RetailerComponent},
    {path:'manufacturer', component:ManufacturerComponent},
    {path:'admin-signin', component:AdminSigninComponent},
    {path:'ratailer/retailer-signin', component:RetailerSigninComponent},
    {path:'ratailer/retailer-signup', component:RetailerSignupComponent},
    {path:'manufacturer/manufecturear-signin', component:ManufecturearSigninComponent},
    {path:'manufacturer/manufecturear-signup', component:ManufecturearSignupComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
