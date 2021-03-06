import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {PharmacyComponent} from './pharmacy/pharmacy.component';
import {MedsComponent} from './meds/meds.component';
import {PharmacyAddComponent} from './pharmacy-add/pharmacy-add.component';
import {MedsAddComponent} from './meds-add/meds-add.component';
import {PharmaGuard} from './pharma.guard';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [PharmaGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'login/signUp', component: SignUpComponent},
  {path: 'pharmacy', component: PharmacyComponent},
  {path: 'meds', component: MedsComponent},
  {path: 'addPharmacy', component: PharmacyAddComponent},
  {path: 'addMeds', component: MedsAddComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
