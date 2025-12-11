import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { castAsUnderTrialPrisoner } from "./under-trial-prisoner.interface";
import { serverURL } from "../../../environment/environment";

@Injectable({ providedIn: 'root' })
export class UnderTrialService {

    constructor(private http: HttpClient) { }
    get_under_trial_prisoner_list(month: string, year: number, org_id:string): Observable<any[]> {

        const url = `${serverURL}/v2/report/under/trial/prisoners/get/for/hcs?report_month=${month}&report_year=${year}&organization=${org_id}`;
        console.log(url)
        return this.http.get<any>(url)


    }


    getOrganizations() {
        return this.http.get<any>(`${serverURL}/v2/organization/`);
    }
}
