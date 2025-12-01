import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class UploadCasesWithPartyAbove60Service {
  constructor(private http: HttpClient) {}

  upload_cases_with_party_above_60(formData: FormData) {
    const uploadUrl = `${URL}/v2/reports/above_60/upload/`;
    return this.http.post<any>(uploadUrl, formData);
  }
}
