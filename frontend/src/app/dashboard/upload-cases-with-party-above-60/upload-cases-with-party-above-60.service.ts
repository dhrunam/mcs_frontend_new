import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverURL } from '../../../environment/environment';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UploadCasesWithPartyAbove60Service {
  constructor(private http: HttpClient) {}

  upload_cases_with_party_above_60(formData: FormData) {
    const uploadUrl = `${serverURL}/v2/report/pending/cases/above/sixty/`;
    return this.http.post<any>(uploadUrl, formData);
  }

  get_last_uploaded_details():Observable<any>{
              return this.http.get<any>(`${serverURL}/v2/report/pending/cases/above/sixty/latest`);
        }

}
