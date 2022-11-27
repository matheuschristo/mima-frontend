import { EstacaoModel, EstacaoRegisterModel } from './../models/estacaoModel';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstacaoService {

  endPointEstacao: string = "http://localhost:8080/estacao/"

  constructor(private httpClient: HttpClient) { }

  // POST

  addEstacao(postData: EstacaoRegisterModel): Observable<EstacaoRegisterModel> {
    return this.httpClient.post<EstacaoRegisterModel>(this.endPointEstacao, postData)
  }

  getAllEstacao(): Observable<any> {
    return this.httpClient.get<any>(this.endPointEstacao + "getAll")
  }

  getEstacaoByNome(nome: string): Observable<any> {
    return this.httpClient.get<any>(this.endPointEstacao + "search-name/" + nome)
  }
}
