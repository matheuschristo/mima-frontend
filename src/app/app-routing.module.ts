import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
import { MedicaoComponent } from './components/medicao/medicao.component';
import { CreateMedicaoComponent } from './components/create-medicao/create-medicao.component';
import { StartMedicaoComponent } from './components/start-medicao/start-medicao.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterEstacaoComponent } from './components/register-estacao/register-estacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register-user', component: CreateUserComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register-estacao', component: RegisterEstacaoComponent},
  {path: 'start-medicao', component: StartMedicaoComponent},
  {path: 'create-medicao/:idEstacao', component: CreateMedicaoComponent},
  {path: 'medicao/:idEstacao', component: MedicaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
