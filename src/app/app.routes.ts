import {  Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { autorizacaoGuard } from './_guard/autorizacao.guard';

 
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'about', component: AboutComponent},
    { path: 'categoria', component: CategoriaComponent, canActivate: [autorizacaoGuard] }

];