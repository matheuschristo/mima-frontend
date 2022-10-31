import { EstacaoModel } from './../../models/estacaoModel';
import { Component, OnInit } from '@angular/core';
import { EstacaoService } from 'src/app/services/estacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-estacao',
  templateUrl: './register-estacao.component.html',
  styleUrls: ['./register-estacao.component.css']
})
export class RegisterEstacaoComponent implements OnInit {

  estacao: EstacaoModel = {
    id: 0,
    nome: "",
    descricao: "",
    localizacao: "",
    responsavel: ""
  }

  constructor(private estacaoService: EstacaoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  doRegister() {
    this.estacaoService.addEstacao(this.estacao).subscribe(data => {
      this.estacao = data
    })

    this.router.navigate([''])
  }
}
