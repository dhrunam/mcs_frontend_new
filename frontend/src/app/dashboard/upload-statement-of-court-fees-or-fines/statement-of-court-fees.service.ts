import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class StatementOfCourtFeesService {
  constructor(private http: HttpClient) {}

  upload_statement_of_court_fees(formData: FormData) {
    const uploadUrl = `${URL}/v2/reports/court_fees/upload/`;
    return this.http.post<any>(uploadUrl, formData);
  }
}
