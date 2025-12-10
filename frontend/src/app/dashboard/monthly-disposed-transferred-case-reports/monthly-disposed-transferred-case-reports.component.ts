import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import { SubmitMonthlyStatementService } from '../services/submit-monthly-statement/submit-monthly-statement.service';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DisposedTransferredReportService } from './disposed-transferred-services';
import { HttpParams } from '@angular/common/http';
import { Filter } from '../shared/interfaces/filter.interface';
import { DisposedCasesReport, dummydata } from '../../shared/interfaces/disposed-transferred-case.interface';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-monthly-disposed-transferred-case',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './monthly-disposed-transferred-case-reports.component.html',
  styleUrl: './monthly-disposed-transferred-case-reports.component.css'
})
export class MonthlyDisposedTransferredCaseReportsComponent {
  years: number[] = [];
  userList: any = [];
  currentYear: number = new Date().getFullYear();
  username: string = this.localStorageService.getUserName();
  organisationList: any = [];
  showLoader: boolean = false;
  selectedMonth:string=''



  filteredOrganization:string=''
  filterData: any;
  disposedTransferredCases: any |null=null;
  alldisposedTransferredCases: DisposedCasesReport[]=[]
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  casetypeNames: string[] = []

  defaultSelectedOrgId: number | null = null



  constructor(private authService: AuthService,
    private disposedTransferredService: DisposedTransferredReportService,
    private localStorageService: LocalStorageService,
    private cdr: ChangeDetectorRef,

  ){}


  ngOnInit(): void {
    AOS.init();
    this.authService.getLoginUserInfo().subscribe(data=>{

      console.log("Logged in user data is", data.username)
    })
    this.years = this.generateYears();
    this.GetAllUserList();
    this.getOrganizationList();
    this.years = this.generateYears();
  }


  getOrganizationList(){
    this.disposedTransferredService.getOrganizations().subscribe({
      next: data => {
        console.log("GetOrganizationList:", data);
        this.organisationList = data;
      }
    }
    )
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



  // GetOrganizationList() {
  //   this.disposedTransferredService.GetOrganizations().subscribe({
  //     next: data => {
  //       console.log("GetOrganizationList:", data);
  //       this.organisationList = data;
  //     }
  //   });
  // }


  filterDataByTypeName(event: any) {
    const selectedType = event.target.value

    if (selectedType === 'All')
    {
      this.disposedTransferredCases = this.alldisposedTransferredCases // Show all data
    } else
    {
      this.disposedTransferredCases = this.alldisposedTransferredCases && this.alldisposedTransferredCases.filter(
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
      if (this.defaultSelectedOrgId)
      {
        formdata.value.user = this.defaultSelectedOrgId
        org_id = this.defaultSelectedOrgId
      }
      this.showLoader = true
      // alert(org_id)
      this.filteredOrganization = (this.organisationList as any[]).find(x => x.id == org_id)?.organization_name ?? '';
      this.disposedTransferredService.get_disposed_transferred_cases(formdata.value.month, formdata.value.year, formdata.value.case_type, formdata.value.user).subscribe(
        data => {
          this.disposedTransferredCases = data;
          this.alldisposedTransferredCases=data;
          // this.casetypeNames = ['All', ...new Set(this.disposedTransferredCases.map(caseItem => caseItem.case_type))];
          this.selectedMonth = this.months[formdata.value.month - 1]
          console.log("Dispose data is ", data)
          // if(this.disposedTransferredCases.length==0){
            // this.disposedTransferredCases=dummydata.flatMap(caseItem=> caseItem.data)
          // }
          this.showLoader=false
          this.cdr.detectChanges()

        }
      )
      // this.disposedTransferredCases = dummydata.flatMap(caseItem => caseItem.data)
      // this.showLoader=false
    }
  }

  GetAllUserList() {
    this.authService.getAllUsers().subscribe({
      next: data => {
        console.log("GetAllUserList():", data);
        this.userList = data;
        if (this.username !== 'hcs_admin')
        {
          this.defaultSelectedOrgId = (this.userList as any[]).find(x => x.username === this.username)?.related_profile.organization ?? 'none';
          // alert(this.defaultSelectedOrgId)
        }
      }
    });
  }

  ResetReport() {
    this.disposedTransferredCases
     = null;
  }
}
