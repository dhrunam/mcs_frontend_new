import { Component } from '@angular/core';
import { PendingSeniorCitizenCase } from './senior-citizen-pending-case.interface';
import AOS from 'aos';
import { Filter } from '../shared/interfaces/filter.interface';
import { PendingCaseReport } from '../../shared/interfaces/pending-case-report';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SeniorCitizenCasesService } from './senior-citizen-pending-cases.services';

@Component({
  selector: 'app-senior-citizen-pending-cases',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './senior-citizen-pending-cases.component.html',
  styleUrl: './senior-citizen-pending-cases.component.css'
})
export class SeniorCitizenPendingCasesComponent {

  years: number[] = [];
  userList: any = [];
  currentYear: number = new Date().getFullYear();
  username: string = this.localStorageService.getUserName();
  organisationList: any = [];
  showLoader: boolean = false;



  lastDateOfMonth: any = ''
  filterData: any;
  seniorCitizenPendingCases: PendingSeniorCitizenCase[] | null = null;
  allSeniorCitizenPendingCases: PendingSeniorCitizenCase[] =[]
  casetypeNames: string[] = []
  defaultSelectedOrgId: number | null = null
  filteredOrganization: string = ''

  constructor(private authService: AuthService, private seniorCitizenPendingCaseservice: SeniorCitizenCasesService,
    private localStorageService: LocalStorageService) { }


  ngOnInit(): void {
    AOS.init();
    this.years = this.generateYears();
    this.GetAllUserList();
    this.GetOrganizationList();
    this.years = this.generateYears();
  }


  GetOrganizationList() {
    this.seniorCitizenPendingCaseservice.getOrganizations().subscribe({
      next: data => {
        console.log("GetOrganizationList:", data);
        this.organisationList = data;

      }
    });
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


  filterDataByTypeName(event: any) {
    const selectedType = event.target.value

    if (selectedType === 'All')
    {
      this.seniorCitizenPendingCases = this.allSeniorCitizenPendingCases // Show all data
    } else
    {
      this.seniorCitizenPendingCases = this.allSeniorCitizenPendingCases && this.allSeniorCitizenPendingCases.filter(
        caseItem => caseItem.type_name === selectedType
      );
    }
  }

  // GetOrganizationList() {
  //   this.disposedTransferredService.GetOrganizations().subscribe({
  //     next: data => {
  //       console.log("GetOrganizationList:", data);
  //       this.organisationList = data;
  //     }
  //   });
  // }


  onSubmit(formdata: NgForm) {
    var org_id = formdata.value.user
    if (formdata.invalid)
    {
      formdata.control.markAllAsTouched()
    }
    else
    {
      this.showLoader = true
      if (this.defaultSelectedOrgId)
      {
        formdata.value.user = this.defaultSelectedOrgId
        org_id = this.defaultSelectedOrgId
      }
      this.filteredOrganization = (this.organisationList as any[]).find(x => x.id == org_id
      )?.organization_name ?? '';
      this.seniorCitizenPendingCaseservice.get_pending_senior_citizen_case(formdata.value.month, formdata.value.year,formdata.value.user,formdata.value.case_type).subscribe(
        data => {
          this.seniorCitizenPendingCases = data;
          this.allSeniorCitizenPendingCases = data;
          
          this.casetypeNames = ['All', ...new Set(this.seniorCitizenPendingCases.map(caseItem => caseItem.type_name))];
          console.log("Senior citizen pending case list data is ", data)
          this.lastDateOfMonth = this.getLastDateOfMonth(Number(formdata.value.month), Number(formdata.value.year));
          // if(this.seniorCitizenPendingCases.length==0){
          // this.seniorCitizenPendingCases=dummydata.flatMap(caseItem=> caseItem.data)
          // }
          this.showLoader = false
        }
      )
      // this.seniorCitizenPendingCases = dummydata.flatMap(caseItem => caseItem.data)
      // this.showLoader = false
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
        }
      }
    });
  }

  getLastDateOfMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
  }


  ResetReport() {
    this.seniorCitizenPendingCases
      = null;
  }

}
