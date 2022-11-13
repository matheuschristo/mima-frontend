import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterEstacaoComponent } from './components/register-estacao/register-estacao.component';
import { HomeComponent } from './components/home/home.component';
import { StartMedicaoComponent } from './components/start-medicao/start-medicao.component';
import { CreateMedicaoComponent } from './components/create-medicao/create-medicao.component';
import { MedicaoComponent } from './components/medicao/medicao.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterEstacaoComponent,
    HomeComponent,
    StartMedicaoComponent,
    CreateMedicaoComponent,
    MedicaoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
