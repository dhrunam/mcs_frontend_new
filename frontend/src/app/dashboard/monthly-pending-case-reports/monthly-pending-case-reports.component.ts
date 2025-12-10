import { Component } from '@angular/core';
import { Filter } from '../shared/interfaces/filter.interface';
import { AuthService } from '../../auth/auth.service';
import { DisposedTransferredService } from '../monthly-disposed-transferred-case/disposed-transferred-services';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import { PendingCaseReport } from '../../shared/interfaces/pending-case-report';
import AOS from 'aos';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PendingCaseReportsService } from './pending-case-reports-services';
import { CookieUtils } from '../shared/utils/cookies';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-monthly-pending-cases',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './monthly-pending-case-reports.component.html',
  styleUrl: './monthly-pending-case-reports.component.css'
})
export class MonthlyPendingCaseReportsComponent {
   years: number[] = [];
    userList: any = [];
    currentYear: number = new Date().getFullYear();
    username: string = this.localStorageService.getUserName();
    organisationList: any = [];
    showLoader: boolean = false;



    filterData:any
    pendingCases: any |null=null;
    allPendingCases: PendingCaseReport[] =[]
    casetypeNames: string[] = []

    selectedMonth: string = ''
    months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    defaultSelectedOrgId: number | null = null
    filteredOrganization:string=''



    constructor(private authService: AuthService,
      private pendingCaseService: PendingCaseReportsService,
      private localStorageService: LocalStorageService,
      private cookieUtils: CookieUtils,
      private cdr: ChangeDetectorRef
    ){}


    ngOnInit(): void {
      AOS.init();
      this.years = this.generateYears();
      this.GetAllUserList();
      this.GetOrganizationList();
      this.years = this.generateYears();
    }

    private generateYears(): number[] {
      const startYear = this.currentYear - 10;
      const years = [];
      for (let year = this.currentYear; year >= startYear; year--)
      {
        years.push(year);
      }
      return years;
    }

    GetOrganizationList() {
      this.pendingCaseService.getOrganizations().subscribe({
        next: data => {
          console.log("GetOrganizationList:", data);
          this.organisationList = data;

        }
      });
    }


    filterDataByTypeName(event: any) {
    const selectedType=event.target.value

    if (selectedType === 'All')
    {
      this.pendingCases = this.allPendingCases // Show all data
    } else
    {
      this.pendingCases = this.allPendingCases && this.allPendingCases.filter(
        caseItem => caseItem.type_name === selectedType
      );
    }
  }

    onSubmit(formdata:NgForm){
      var org_id = formdata.value.user
      if (formdata.invalid){
        formdata.control.markAllAsTouched()
      }
      else{
        this.showLoader = true

        if (this.defaultSelectedOrgId)
        {
          formdata.value.user = this.defaultSelectedOrgId
          org_id = this.defaultSelectedOrgId
        }
        this.filteredOrganization = (this.organisationList as any[]).find(x => x.id == org_id)?.organization_name ?? '';
        this.pendingCaseService.get_monthly_pending_cases(formdata.value.month, formdata.value.year, formdata.value.case_type, formdata.value.user).subscribe(
          data => {
            this.selectedMonth = this.months[formdata.value.month - 1]
            this.pendingCases = data;
            this.allPendingCases=data;
            // this.casetypeNames = ['All',...new Set(this.pendingCases.map(caseItem => caseItem.type_name))];
            // console.log("Pending case data is ", data)

            this.showLoader=false
            this.cdr.detectChanges();
          }
        )

      }
    }

    GetAllUserList() {
      this.authService.getAllUsers().subscribe({
        next: data => {
          console.log("GetAllUserList():", data);
          this.userList = data;

          if (this.username !== 'hcs_admin')
          {
            this.defaultSelectedOrgId = (this.userList as any[]).find(x => x.username === this.username)?.related_profile.organization ?? '';
          }

        }
      });
    }

    ResetReport() {
      this.pendingCases
       = null;
    }
}
