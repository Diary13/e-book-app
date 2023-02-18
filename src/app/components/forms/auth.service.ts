import { Injectable } from '@angular/core';
import { Auth, UserType } from 'src/generated-types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient) { }

  signUp(newUser: UserType) {
    return this.httpClient.post<UserType>("/api/users", newUser);
  }
  login(authValue: Auth) {
    return this.httpClient.post<Auth>('/api/auth/login', authValue);
  }
}
