import { HomeComponent } from './components/home/home.component';
import { RegisterEstacaoComponent } from './components/register-estacao/register-estacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register-estacao', component: RegisterEstacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
