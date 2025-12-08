import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverURL } from '../../../environment/environment';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UploadExParteInjunctionGrantedCasesService {
  constructor(private http: HttpClient) {}

  upload_ex_parte_injunction_granted_cases(formData: FormData) {
    const uploadUrl = `${serverURL}/v2/report/ex-parte/injunction/`;
    return this.http.post<any>(uploadUrl, formData);
  }

   get_last_uploaded_details():Observable<any>{
                return this.http.get<any>(`${serverURL}/v2/report/ex-parte/injunction/latest`);
          }

}
