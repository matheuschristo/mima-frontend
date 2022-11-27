import { UserModel } from './../models/userModel';
import { UserLoginModel } from './../models/userLoginModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endPointUser: string = "http://localhost:8080/user/"

  public setUserAutenticado(user: any){
    localStorage.setItem('u', JSON.stringify(user))
  }
  public getUserAutenticado(): any{
    return localStorage.getItem('u')
  }

  constructor(private httpClient: HttpClient) { }

  loginUser(postData: UserLoginModel): Observable<UserModel> {
    return this.httpClient.post<UserModel>(this.endPointUser + 'login/', postData)
  }

  addUser(postData: UserModel): Observable<UserModel> {
    return this.httpClient.post<UserModel>(this.endPointUser, postData)
  }
}
