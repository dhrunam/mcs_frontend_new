import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { PendingCaseReport, castAsMonthlyCasesReportViewModel, dummydata as disposedDummy } from "../../shared/interfaces/pending-case-report";
import { URL } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class PendingCasesService {
  constructor(private http: HttpClient) { }

  get_pending_cases(month: string, year: number, civil_criminal: string): Observable<PendingCaseReport[]> {
    const url = `${URL}/v2/reports/pending_cases?criminal_civil_flag=${civil_criminal}&month=${month}&year=${year}&org_id=3`;
    return this.http.get<{ data: any[] }>(url)
      .pipe(
        map(response => response.data.flatMap((caseItem: any) =>
          caseItem.data.map((item: any) => castAsMonthlyCasesReportViewModel(item))
        )),
        catchError((error) => {
          alert('Server error');
          // fallback to pending-case dummy data if available, otherwise empty array
          return of((disposedDummy || []).flatMap((caseItem: any) =>
            caseItem.data.map((item: any) => castAsMonthlyCasesReportViewModel(item))
          ));
        })
      );
  }

  upload_pending_cases(formData: FormData) {
    const uploadUrl = `${URL}/v2/reports/pending_cases/upload/`;
    return this.http.post<any>(uploadUrl, formData);
  }
}
