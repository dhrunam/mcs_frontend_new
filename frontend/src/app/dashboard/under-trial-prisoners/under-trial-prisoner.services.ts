import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { castAsUnderTrialPrisoner } from "./under-trial-prisoner.interface";
import { serverURL } from "../../../environment/environment";

@Injectable({ providedIn: 'root' })
export class UnderTrialService {

    constructor(private http: HttpClient) { }
    get_under_trial_prisoner_list(month: string, year: number, org_id:string): Observable<any[]> {

        const url = `${serverURL}/v1/reports/cis/report/present/prisoner?month=${month}&year=${year}&org_id=${org_id}`;
        console.log(url)
        return this.http.get<{ data: any[] }>(url)
            .pipe(
                map(response => response.data.map((item: any) => castAsUnderTrialPrisoner(item))
                ), )
                
                
    }


    getOrganizations() {
        return this.http.get<any>(`${serverURL}/v1/auth/organization/`);
    }
}