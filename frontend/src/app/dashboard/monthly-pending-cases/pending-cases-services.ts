import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { PendingCaseReport, castAsMonthlyCasesReportViewModel } from "../../shared/interfaces/pending-case-report";
import { serverURL } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class PendingCasesService {
  constructor(private http: HttpClient) { }

  get_pending_cases(month: string, year: number, civil_criminal: string): Observable<PendingCaseReport[]> {
    const url = `${serverURL}/v2/reports/pending_cases?criminal_civil_flag=${civil_criminal}&report_month=${month}&report_year=${year}&organization=3`;
    return this.http.get<any>(url);
  }

  upload_pending_cases(formData: FormData) {
    const uploadUrl = `${URL}/v2/reports/pending_cases/upload/`;
    return this.http.post<any>(uploadUrl, formData);
  }
}
