import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage/local-storage.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthInterface } from '../shared/interfaces/auth-interface';
import { BehaviorSubject, catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import { serverURL } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  private userProfileSubject = new BehaviorSubject<any>(null);
  userProfile$ = this.userProfileSubject.asObservable();
  private userProfile : any;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  // Check if user is logged in
  get isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }

  login(data: FormData){
    return this.http.post<AuthInterface>(`${serverURL}/v2/auth/login/`, data)
                    .pipe(tap(respData => this.localStorageService.saveData(respData)),
                    //tap(() => this._isLoggedIn.next(true)),
                    tap(() => this.setUserProfile()));
  }

  // Refresh tokens
  refreshToken(): Observable<any> {
    const refreshToken = this.localStorageService.getRefreshToken();
    return this.http.post<any>(`${serverURL}/v2/auth/refresh/`, { refresh: refreshToken })
      .pipe(
        tap(response => this.localStorageService.saveAccessToken(response.access)),
        catchError(error => {
          console.error('Token refresh failed', error);
          return throwError(() => error);
        })
      );
  }

  logout(){
    this.localStorageService.clearSession();
    this._isLoggedIn.next(false);
    window.location.href = '/';
  }

  setUserProfile(){
    console.log("user profile called");
    return this.http.get<any>(`${serverURL}/v2/user/`).subscribe({next: data=>{
      this.userProfile = data;
      console.log("user profile:",this.userProfile);
    }});
  }

    // // Method to get user details from the token
    // getTokenDetails() {
    //   if (this.localStorageService.getToken()) {
    //     return jwtDecode(this.localStorageService.getToken());
    //   }
    //   return null;
    // }

    getLoginUserInfo(){
      return this.http.get<any>(`${serverURL}/v2/user_info`);
    }


  getAllUsers() {
    let params = new HttpParams()
    .set('user_group', 'district_user');
    return this.http.get<any>(`${serverURL}/v2/user/`,{params});
  }

  getUserProfile(){
    return this.userProfile;
  }

  // getUserProfile(): Observable<any> {
  //   return this.http.get<any>(`${URL}/v1/auth/user/`).pipe(
  //     tap(data => this.userProfileSubject.next(data)),
  //     catchError(error => {
  //       console.error('Failed to fetch user profile', error);
  //       return throwError(() => error);
  //     })
  //   );
  // }

}
