import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Case, castAsDisposedCasesReportViewModel, DisposedCasesReport, dummydata } from "../../shared/interfaces/disposed-transferred-case.interface";
import { serverURL } from "../../../environment/environment";

@Injectable({providedIn:'root'})
export class DisposedTransferredReportService{

    constructor(private http:HttpClient){}

    get_disposed_transferred_cases(month: string, year: number, civil_criminal: string, org_id:number): Observable<any[]>{

        const url = `${serverURL}/v2/report/disposed/cases/get/for/hcs?civil_criminal=${civil_criminal}&report_month=${month}&report_year=${year}&organization=${org_id}`;
        console.log(url)
        return this.http.get<any>(url);
        // return this.http.get<{ data: any[] }>(url)
        //     .pipe(
        //         map(response => response.data.flatMap((caseItem: any) =>
        //             caseItem.data.map((item: any) => castAsDisposedCasesReportViewModel(item))
        //         )),
        //         // catchError((error)=>{
        //         //     alert("Server error")
        //         //     return of(dummydata.flatMap((caseItem: any) =>
        //         //         caseItem.data.map((item: any) => castAsDisposedCasesReportViewModel(item))
        //         //     ));
        //         // })
        //     );


    }

    getOrganizations() {
        return this.http.get<any>(`${serverURL}/v2/organization/`);
    }


    // GetOrganizations() {
    //     return this.http.get<any>(`${URL}/v1/auth/organization/`);
    // }
}
