import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { catchError, of, throwError } from 'rxjs';
import { AuthService } from '../auth.service';

export const bearerInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService);
  const authService = inject(AuthService)
  const accessToken = localStorageService.getToken();
  console.log("token",accessToken);
  let modifiedReq = req;
  if (accessToken) {
      modifiedReq = req.clone({
        setHeaders: {
          Accept: "*/*",
          // "Content-Type":'application/json',
          Authorization: `Token ${accessToken}`
        }
      });
  }
  return next(modifiedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if(error.status ==401){
        if(localStorageService.getToken())
        {
          authService.refreshToken().subscribe({
            next:()=> {
              const newAccessToken = localStorageService.getToken();
              const newReq = req.clone({
                setHeaders: {
                  Authorization: `Token ${newAccessToken}`
                }
              });
              return next(newReq);
            },
            error:(err)=>{
              authService.logout();
              return throwError(() => err)
            }
          })
        }
      }
      // else if (error.status === 0)
      // {
      //   // If status is 0, return an empty array wrapped in an observable of any type
      //   return of<any>([]); // Observable that emits an empty array
      // }
      return throwError(()=> error)
    })
  );
}
