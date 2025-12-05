import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverURL } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class UploadCasesVulnerableGroupsService {
  constructor(private http: HttpClient) {}

  upload_cases_vulnerable_groups(formData: FormData) {
    const uploadUrl = `${serverURL}/v2/reports/vulnerable_groups/upload/`;
    return this.http.post<any>(uploadUrl, formData);
  }
}
