import { CreateMedicaoComponent } from './components/create-medicao/create-medicao.component';
import { StartMedicaoComponent } from './components/start-medicao/start-medicao.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterEstacaoComponent } from './components/register-estacao/register-estacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register-estacao', component: RegisterEstacaoComponent},
  {path: 'start-medicao', component: StartMedicaoComponent},
  {path: 'create-medicao/:idEstacao', component: CreateMedicaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
