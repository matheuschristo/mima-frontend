import { UserLoginModel } from './../../models/userLoginModel';
import { UserModel } from './../../models/userModel';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserLoginModel = {
    email: "",
    senha: ""
  }

  userModel: UserModel = {
    id: 0,
    nome: "",
    sobrenome: "",
    email: "",
    phone: "",
    senha: ""
  }

  constructor(
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.service.loginUser(this.user).subscribe(data => {
      this.userModel = data

      this.service.setUserAutenticado(this.userModel)

      this.router.navigate([('/home')])
    })
  }

}
