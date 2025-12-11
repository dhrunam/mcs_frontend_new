// ex-parte-injunction-cases.services.ts

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { castAsExParteInjunctionCase } from "./ex-parte-injunction-case.interface";
// Assuming 'serverURL' is accessible, similar to the existing service
import { serverURL } from "../../../environment/environment";

@Injectable({ providedIn: 'root' })
export class ExParteInjunctionCasesService {

    constructor(private http: HttpClient) { }

    getExParteInjunctionCases(month: string, year: number, org_id: number, case_type: number): Observable<any[]> {

        // **Note:** The actual API endpoint will need to be verified/created on the backend.
        // I'm using a placeholder structure similar to the senior citizen report.
        const url = `${serverURL}/v2/report/ex-parte/injunction/get/for/hcs?report_month=${month}&report_year=${year}&organization=${org_id}&criminal_civil=${case_type}`;
        console.log(url);

        return this.http.get<any>(url);
    }

    getOrganizations() {
        return this.http.get<any>(`${serverURL}/v2/organization/`);
    }
}
