import { Injectable } from '@angular/core';
import { AuthInterface } from '../../shared/interfaces/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public saveData(data: AuthInterface){
    if(window.localStorage.getItem('token') || window.localStorage.getItem('refreshToken')){
      window.localStorage.clear();
    }
    window.localStorage.setItem('token', data.access);
    window.localStorage.setItem('refreshToken', data.refresh);
  }
  public saveAccessToken(accessToken:any){    
    localStorage.removeItem('token');
    window.localStorage.setItem('token', accessToken);
  }

  public getToken(){
    return window.localStorage.getItem('token');
  }

  public getRefreshToken(){
    return window.localStorage.getItem('refreshToken');
  }

  public getUserName(){
    let username:any =  window.localStorage.getItem('username');
    return username;
  }

  public clearSession(){
    //window.localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
  }
}
