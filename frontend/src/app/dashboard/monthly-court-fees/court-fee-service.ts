import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { castDataAsCourtFeeModel, dummyData } from "./court-fee.interface";
import { serverURL } from "../../../environment/environment";

@Injectable({providedIn:'root'})
export class courtFeeService{

    constructor(private http:HttpClient){}
    get_monthly_court_fees(month: string, year: number, org_id: number): Observable<any[]>{

        const url = `${serverURL}/v2/report/court/fee/get/for/hcs?report_month=${month}&report_year=${year}&organization=${org_id}`;
        console.log(url)
        return this.http.get<any>(url);


        }
}
