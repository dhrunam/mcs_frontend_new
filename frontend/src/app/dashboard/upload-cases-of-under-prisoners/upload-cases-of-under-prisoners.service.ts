import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverURL } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class UploadCasesOfUnderPrisonersService {
  constructor(private http: HttpClient) {}

  upload_cases_of_under_prisoners(formData: FormData) {
    const uploadUrl = `${serverURL}/v2/reports/under_prisoners/upload/`;
    return this.http.post<any>(uploadUrl, formData);
  }
}
