import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { serverURL } from "../../../environment/environment";
import { castAsVulnerableGroupPendingCase , dummyData} from "./vulnerable-group-pending-case.interface";

@Injectable({ providedIn: 'root' })
export class VulnerableGroupCaseService {

    constructor(private http: HttpClient) { }
    get_monthly_vulnerable_group_cases(month: string, year: number,org_id:number,civil_criminal:number): Observable<any[]> {

        const url = `${serverURL}/v2/report/vulnerable/group/get/for/hcs?report_month=${month}&report_year=${year}&organization=${org_id}&criminal_civil=${civil_criminal}`;
        console.log(url)
        return this.http.get< any >(url);


    }

    getOrganizations(){
        return this.http.get<any>(`${serverURL}/v2/organization/`);
    }



}
