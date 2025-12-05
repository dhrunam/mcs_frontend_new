import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { castAsMonthlyCasesReportViewModel } from "../../shared/interfaces/pending-case-report";
import { serverURL } from "../../../environment/environment";

@Injectable({providedIn:'root'})
export class PendingCaseReportsService{

    constructor(private http:HttpClient){}

    get_monthly_pending_cases(month: string, year: number, civil_criminal: string, org_id:number): Observable<any[]>{

        const url = `${serverURL}/v1/reports/cis/report/pending?criminal_civil_flag=${civil_criminal}&month=${month}&year=${year}&org_id=${org_id}`;
        console.log('Pending case url is ',url)
        return this.http.get<{ data: any[] }>(url)
            .pipe(
                map(response => response.data.flatMap((caseItem: any) =>
                    caseItem.data.map((item: any) => castAsMonthlyCasesReportViewModel(item))
                )),
                // catchError((error)=>{
                //     alert("Server error")
                //     return of(dummydata.flatMap((caseItem: any) =>
                //         caseItem.data.map((item: any) => castAsMonthlyCasesReportViewModel(item))
                //     ));
                // })
            );

            
    }

    get_yearwise_pending_cases(pending_since: number, civil_criminal: string, org_id: number): Observable<any[]> {

        const url = `${serverURL}/v1/reports/cis/report/pending/year_wise?criminal_civil_flag=${civil_criminal}&threshold_year=${pending_since}&org_id=${org_id}`;
        console.log('Pending case url is ', url)
        return this.http.get<{ data: any[] }>(url)
            .pipe(
                map(response => response.data.flatMap((caseItem: any) =>
                    caseItem.data.map((item: any) => castAsMonthlyCasesReportViewModel(item))
                )),
                // catchError((error)=>{
                //     alert("Server error")
                //     return of(dummydata.flatMap((caseItem: any) =>
                //         caseItem.data.map((item: any) => castAsMonthlyCasesReportViewModel(item))
                //     ));
                // })
            );


    }

    getOrganizations() {
        return this.http.get<any>(`${serverURL}/v1/auth/organization/`);
    }


    // GetOrganizations() {
    //     return this.http.get<any>(`${URL}/v1/auth/organization/`);
    // }
}