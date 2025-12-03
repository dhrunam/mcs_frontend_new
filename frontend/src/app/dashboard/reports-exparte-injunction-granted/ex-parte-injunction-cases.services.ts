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
        const url = `${serverURL}/v1/reports/cis/report/ex_parte_injunction?month=${month}&year=${year}&org_id=${org_id}&criminal_civil_flag=${case_type}`;
        console.log(url);
        
        return this.http.get<{ data: any[] }>(url)
            .pipe(
                map(response => response.data.flatMap((caseItem: any) =>
                    caseItem.data.map((item: any) => castAsExParteInjunctionCase(item))
                )),
                // Add error handling (catchError) as needed
            );
    }

    getOrganizations() {
        return this.http.get<any>(`${serverURL}/v1/auth/organization/`);
    }
}