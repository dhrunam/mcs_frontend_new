import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { castAsPendingSeniorCitizenCase, } from "./senior-citizen-pending-case.interface";
import { serverURL } from "../../../environment/environment";

@Injectable({ providedIn: 'root' })
export class SeniorCitizenCasesService {

    constructor(private http: HttpClient) { }
    get_pending_senior_citizen_case(month: string, year: number, org_id:number,case_type:number): Observable<any[]> {

        const url = `${serverURL}/v1/reports/cis/report/pending/senior_citizen?month=${month}&year=${year}&org_id=${org_id}&criminal_civil_flag=${case_type}`;
        console.log(url)
        return this.http.get<{ data: any[] }>(url)
            .pipe(
                map(response => response.data.flatMap((caseItem: any) =>
                    caseItem.data.map((item: any) => castAsPendingSeniorCitizenCase(item))
                )),
                // catchError((error) => {
                //     alert("Server error")
                //     return of(dummyData.map((item: any) => castAsPendingSeniorCitizenCase(item))
                //     )
                // })
            );


    }




    getOrganizations() {
        return this.http.get<any>(`${serverURL}/v1/auth/organization/`);
    }
}