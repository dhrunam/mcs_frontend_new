import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmitMonthlyStatementService {
  constructor(private http: HttpClient) { }
  GetDraftMonthlyStatement(month:string,year:number, civil_criminal:string) {
    let params = new HttpParams()
    .set('is_draft', 'True')
    .set('report_month', month.toString())
    .set('report_year', year.toString())
    .set('civil_criminal',civil_criminal);
    return this.http.get<any>(`${serverURL}/v2/report/`,{params});
  }

  GetMonthlyStatement(month:string,year:number,civil_criminal:string) {
    let params = new HttpParams()
    .set('is_draft', 'False')
    .set('report_month', month.toString())
    .set('report_year', year.toString())
    .set('civil_criminal',civil_criminal);
    return this.http.get<any>(`${serverURL}/v2/report/`,{params});
  }

  SaveMonthlyStatement(monthlyStatement:any)
  {
    return this.http.post(`${serverURL}/v2/report/`, monthlyStatement);
  }

  GetMonthlyCaseStatementReport(month:string,year:number,organization: string,civil_criminal:string) {
    let params = new HttpParams()
    .set('is_draft', 'False')
    .set('report_month', month.toString())
    .set('report_year', year.toString())
    .set('organization',organization)
    .set('civil_criminal',civil_criminal);
    return this.http.get<any>(`${serverURL}/v2/report/`,{params});
  }

  // GetMonthlyCaseStatementByLoggedInUser(month:string,year:number,user: string) {
  //   let params = new HttpParams()
  //   .set('is_draft', false)
  //   .set('report_month', month.toString())
  //   .set('report_year', year.toString());
  //   return this.http.get<any>(`${URL}/v1/reports/`,{params});
  // }

  GetOrganizations()
  {
    return this.http.get<any>(`${serverURL}/v2/organization/`);
  }
  GetOrganization(id:number)
  {
    return this.http.get<any>(`${serverURL}/v2/organization/${id}`);
  }
  uploadMonthlyStatementFile(formData: FormData) {
    return this.http.post(`${serverURL}/v2/report/`, formData);
  }

  GetConsolidatedMonthlyCaseStatementReport(month:string,year:number) {
    let params = new HttpParams()
    .set('month', month.toString())
    .set('year', year.toString());
    return this.http.get<any>(`${serverURL}/v2/report/summary/`,{params});
  }

  GetCaseTypes(court_type:string) {
    let params = new HttpParams()
    .set('court_type', court_type);
    return this.http.get<any>(`${serverURL}/v2/report/case_type/all`,{params});
  }

  GetOldestCaseDetails(month:string,year:number, organization:number, civil_criminal:string ) {
    let params = new HttpParams()
    .set('report_month', month.toString())
    .set('report_year', year.toString())
    .set('organization',organization)
    .set('civil_criminal',civil_criminal);
    return this.http.get<any>(`${serverURL}/v2/report/oldest_case/get`,{params});
  }

  GetMonthlyDisposalReport(month:string,year:number, organization:number) {
    let params = new HttpParams()
    .set('report_month', month.toString())
    .set('report_year', year.toString())
    .set('organization',organization);
    return this.http.get<any>(`${serverURL}/v2/report/disposed/cases/get/for/hcs`,{params});
  }
}
