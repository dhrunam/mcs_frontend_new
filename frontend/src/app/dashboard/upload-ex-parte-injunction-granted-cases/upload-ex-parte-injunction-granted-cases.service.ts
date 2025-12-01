import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class UploadExParteInjunctionGrantedCasesService {
  constructor(private http: HttpClient) {}

  upload_ex_parte_injunction_granted_cases(formData: FormData) {
    const uploadUrl = `${URL}/v2/reports/ex_parte_injunction_granted/upload/`;
    return this.http.post<any>(uploadUrl, formData);
  }
}
