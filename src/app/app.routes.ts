import {  Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { autorizacaoGuard } from './_guard/autorizacao.guard';
import { CursosComponent } from './cursos/cursos.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TabelaComponent } from './tabela/tabela.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { CursoDesenvolvimentoWebComponent } from './curso-desenvolvimento-web/curso-desenvolvimento-web.component';
import { ContatoComponent } from './contato/contato.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'about', component: AboutComponent},
    { path: 'cursos', component: CursosComponent},
    { path: 'categoria', component: CategoriaComponent, canActivate: [autorizacaoGuard] },
    { path: 'quem-somos', component: QuemSomosComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'tabela', component: TabelaComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'certificados', component: CertificadosComponent},
    { path: 'curso-desenvolvimento-web', component: CursoDesenvolvimentoWebComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'home', component: HomeComponent},

];
