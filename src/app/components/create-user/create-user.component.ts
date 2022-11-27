import { Router } from '@angular/router';
import { UserModel } from './../../models/userModel';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: UserModel = {
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

  addUser() {
    this.service.addUser(this.user).subscribe(data => {
      this.user = data

      this.router.navigate(['/'])
    })
  }

}
