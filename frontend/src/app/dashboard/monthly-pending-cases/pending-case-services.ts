import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { castAsMonthlyCasesReportViewModel, dummydata } from "../../shared/interfaces/pending-case-report";

@Injectable({providedIn:'root'})
export class PendingCaseService{

    constructor(private http:HttpClient){}

    get_monthly_pending_cases(month: string, year: number, civil_criminal: string): Observable<any[]>{

        const url = `http://10.182.144.12:8001/api/v1/reports/cis/report/pending?criminal_civil_flag=${civil_criminal}&month=${month}&year=${year}&org_id=3`;
        console.log(url)
        return this.http.get<{ data: any[] }>(url)
            .pipe(
                map(response => response.data.flatMap((caseItem: any) =>
                    caseItem.data.map((item: any) => castAsMonthlyCasesReportViewModel(item))
                )),
                catchError((error)=>{
                    alert("Server error")
                    return of(dummydata.flatMap((caseItem: any) =>
                        caseItem.data.map((item: any) => castAsMonthlyCasesReportViewModel(item))
                    ));
                })
            );

            
    }


    // GetOrganizations() {
    //     return this.http.get<any>(`${URL}/v1/auth/organization/`);
    // }

    // Upload monthly pending cases file
    upload_pending_cases(formData: FormData) {
        const uploadUrl = `http://10.182.144.12:8001/api/v1/reports/cis/report/pending/upload/`;
        return this.http.post<any>(uploadUrl, formData);
    }
}