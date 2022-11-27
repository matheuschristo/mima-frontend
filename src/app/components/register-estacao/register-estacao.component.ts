import { UserService } from './../../services/user.service';
import { EstacaoModel, EstacaoRegisterModel } from './../../models/estacaoModel';
import { Component, OnInit } from '@angular/core';
import { EstacaoService } from 'src/app/services/estacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-estacao',
  templateUrl: './register-estacao.component.html',
  styleUrls: ['./register-estacao.component.css']
})
export class RegisterEstacaoComponent implements OnInit {

  estacao: EstacaoRegisterModel = {
    idUser: JSON.parse(this.userService.getUserAutenticado()).id,
    nome: "",
    descricao: "",
    localizacao: "",
    responsavel: ""
  }

  constructor(private estacaoService: EstacaoService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  doRegister() {
    this.estacaoService.addEstacao(this.estacao).subscribe(data => {
      this.estacao = data
    })

    this.router.navigate(['/home'])
  }
}
