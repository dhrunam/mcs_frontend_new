import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Case, castAsDisposedCasesReportViewModel, DisposedCasesReport, dummydata } from "../../shared/interfaces/disposed-transferred-case.interface";

@Injectable({providedIn:'root'})
export class DisposedTransferredService{

    constructor(private http:HttpClient){}

    get_disposed_transferred_cases(month: string, year: number, civil_criminal: string): Observable<any[]>{

        const url = `http://10.182.144.12:8001/api/v1/reports/cis/report/disposed_transfered?criminal_civil_flag=${civil_criminal}&month=${month}&year=${year}&org_id=3`;
        console.log(url)
        return this.http.get<{ data: any[] }>(url)
            .pipe(
                map(response => response.data.flatMap((caseItem: any) =>
                    caseItem.data.map((item: any) => castAsDisposedCasesReportViewModel(item))
                )),
                catchError((error)=>{
                    alert("Server error")
                    return of(dummydata.flatMap((caseItem: any) =>
                        caseItem.data.map((item: any) => castAsDisposedCasesReportViewModel(item))
                    ));
                })
            );

            
    }


    // GetOrganizations() {
    //     return this.http.get<any>(`${URL}/v1/auth/organization/`);
    // }
}