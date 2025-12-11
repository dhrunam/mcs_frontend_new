import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { castAsPendingSeniorCitizenCase, } from "./senior-citizen-pending-case.interface";
import { serverURL } from "../../../environment/environment";

@Injectable({ providedIn: 'root' })
export class SeniorCitizenCasesService {

    constructor(private http: HttpClient) { }
    get_pending_senior_citizen_case(month: string, year: number, org_id:number,case_type:number): Observable<any[]> {

        const url = `${serverURL}/v2/report/pending/cases/above/sixty/get/for/hcs?report_month=${month}&report_year=${year}&organization=${org_id}&criminal_civil=${case_type}`;
        console.log(url)
        return this.http.get<any>(url);

    }

    getOrganizations() {
        return this.http.get<any>(`${serverURL}/v2/organization/`);
    }
}
