import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { serverURL } from "../../../environment/environment";
import { castAsVulnerableGroupPendingCase , dummyData} from "./vulnerable-group-pending-case.interface";

@Injectable({ providedIn: 'root' })
export class VulnerableGroupCaseService {

    constructor(private http: HttpClient) { }
    get_monthly_vulnerable_group_cases(month: string, year: number,org_id:number,civil_criminal:number): Observable<any[]> {

        const url = `${serverURL}/v1/reports/cis/report/pending/minor?month=${month}&year=${year}&org_id=${org_id}&criminal_civil_flag=${civil_criminal}`;
        console.log(url)
        return this.http.get<{ data: any[] }>(url)
            .pipe(
                map(response => response.data.flatMap((caseItem: any) =>
                    caseItem.data.map((item: any) => castAsVulnerableGroupPendingCase(item))
                )),
                catchError((error) => {
                    alert("Server error")
                    return of(dummyData.map((item: any) => castAsVulnerableGroupPendingCase(item))
                    )
                })
            );


    }

    getOrganizations(){
        return this.http.get<any>(`${serverURL}/v1/auth/organization/`);
    }



}
