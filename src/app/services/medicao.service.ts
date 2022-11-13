import { HttpClient } from '@angular/common/http';
import { MedicaoModel } from './../models/medicaoModel';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicaoService {

  endPointEstacao: string = "http://localhost:8080/medicao/"

  constructor(private httpClient: HttpClient) { }

  getMedicao(id: number): Observable<MedicaoModel> {
    return this.httpClient.get<MedicaoModel>(this.endPointEstacao + id)
  }
}
