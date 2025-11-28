import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { castDataAsCourtFeeModel, dummyData } from "./court-fee.interface";

@Injectable({providedIn:'root'})
export class courtFeeService{

    constructor(private http:HttpClient){}
    get_monthly_court_fees(month: string, year: number): Observable<any[]>{
    
            const url = `http://10.182.144.12:8001/api/v1/reports/cis/report/fee/monthly/collection?month=${month}&year=${year}&org_id=3`;
            console.log(url)
            return this.http.get<{ data: any[] }>(url)
                .pipe(
                    map(response => response.data.flatMap((caseItem: any) =>
                        caseItem.data.map((item: any) => castDataAsCourtFeeModel(item))
                    )),
                    catchError((error)=>{
                        alert("Server error")
                        return of(dummyData.map((item: any) => castDataAsCourtFeeModel(item))
                        )
                    })
                );
    
                
        }
}