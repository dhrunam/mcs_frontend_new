import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { serverURL } from '../../../environment/environment';
import { catchError, map, Observable, of } from 'rxjs';
import { Case, castAsDisposedCasesReportViewModel, DisposedCasesReport, dummydata } from "../../shared/interfaces/disposed-transferred-case.interface";

@Injectable({providedIn:'root'})
export class DisposedTransferredService{

    constructor(private http:HttpClient){}

    get_disposed_transferred_cases(month: number, year: number, civil_criminal: string): Observable<any[]>{
          const uploadUrl = `${serverURL}/v2/report/disposed/cases?criminal_civil_flag=${civil_criminal}&month=${month}&year=${year}&org_id=3`;
        // const url = `http://10.182.144.12:8001/api/v1/reports/cis/report/disposed_transfered?criminal_civil_flag=${civil_criminal}&month=${month}&year=${year}&org_id=3`;
        console.log(uploadUrl)
        return this.http.get<{ data: any[] }>(uploadUrl)
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

    get_last_uploaded_disposed_transferred_cases(): Observable<any>{
        const Url = `${serverURL}/v2/report/disposed/cases/latest`;

         return this.http.get<any>(Url);

    }
    // Upload disposed/transferred monthly report file
    // Adjust endpoint path as required by backend
    upload_disposed_transferred(formData: FormData) {
        const uploadUrl = `${serverURL}/v2/report/disposed/cases/`;
        return this.http.post<any>(uploadUrl, formData);
    }


    // GetOrganizations() {
    //     return this.http.get<any>(`${URL}/v1/auth/organization/`);
    // }
}
