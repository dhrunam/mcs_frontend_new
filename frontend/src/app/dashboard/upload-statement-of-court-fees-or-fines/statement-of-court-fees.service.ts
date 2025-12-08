import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverURL } from '../../../environment/environment';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StatementOfCourtFeesService {
  constructor(private http: HttpClient) {}

  upload_statement_of_court_fees(formData: FormData) {
    const uploadUrl = `${serverURL}/v2/report/court/fee/`;
    return this.http.post<any>(uploadUrl, formData);
  }

  get_last_uploaded_details():Observable<any>{
          return this.http.get<any>(`${serverURL}/v2/report/court/fee/latest`);
    }



}
