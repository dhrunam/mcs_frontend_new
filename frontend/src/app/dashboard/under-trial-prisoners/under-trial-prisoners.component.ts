import { Component } from '@angular/core';
import { UnderTrialPrisoner } from './under-trial-prisoner.interface';
import AOS from 'aos';
import { Filter } from '../shared/interfaces/filter.interface';
import { PendingCaseReport } from '../../shared/interfaces/pending-case-report';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UnderTrialService } from './under-trial-prisoner.services';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-under-trial-prisoners',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './under-trial-prisoners.component.html',
  styleUrl: './under-trial-prisoners.component.css'
})
export class UnderTrialPrisonersComponent {

  years: number[] = [];
  userList: any = [];
  currentYear: number = new Date().getFullYear();
  username: string = this.localStorageService.getUserName();
  organisationList: any = [];
  showLoader: boolean = false;



  lastDateOfMonth:any=''
  filterData: Filter | any = null
  underTrialPrisoners: any | null = null;
  allUnderTrialPrisoners: any | null = null;
  casetypeNames: string[] = []

  defaultSelectedOrgId: number | null = null
  filteredOrganization: string = ''



  constructor(private authService: AuthService,
     private underTrialPrisonerservice: UnderTrialService,
    private localStorageService: LocalStorageService,
    private cdr : ChangeDetectorRef
  ) { }

  filterDataByTypeName(event: any) {
    const selectedType = event.target.value

    if (selectedType === 'All')
    {
      this.underTrialPrisoners = this.allUnderTrialPrisoners // Show all data
    } else
    {
      this.underTrialPrisoners = this.allUnderTrialPrisoners && this.allUnderTrialPrisoners.filter(
        caseItem => caseItem.type_name === selectedType
      );
    }
  }


  ngOnInit(): void {
    AOS.init();
    this.years = this.generateYears();
    this.GetAllUserList();
    this.GetOrganizationList();
    this.years = this.generateYears();
  }



  GetOrganizationList() {
    this.underTrialPrisonerservice.getOrganizations().subscribe({
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

  // GetOrganizationList() {
  //   this.disposedTransferredService.GetOrganizations().subscribe({
  //     next: data => {
  //       console.log("GetOrganizationList:", data);
  //       this.organisationList = data;
  //     }
  //   });
  // }


  onSubmit(formdata: NgForm) {
    var org_id = formdata.value.organization
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

      this.underTrialPrisonerservice.get_under_trial_prisoner_list(formdata.value.month, formdata.value.year, org_id).subscribe(
        data => {
          this.underTrialPrisoners = data;
          this.allUnderTrialPrisoners = data;
          // this.casetypeNames = ['All', ...new Set(this.underTrialPrisoners.map(caseItem => caseItem.type_name))];
          console.log("Under trial prisoner list data is ", data)
          this.lastDateOfMonth=this.getLastDateOfMonth(Number(formdata.value.month),Number(formdata.value.year));
          // if(this.underTrialPrisoners.length==0){
          // this.underTrialPrisoners=dummydata.flatMap(caseItem=> caseItem.data)
          // }
          this.showLoader = false
          this.cdr.detectChanges()
        }
      )
      // this.underTrialPrisoners = dummydata.flatMap(caseItem => caseItem.data)
      this.showLoader = false
      this.cdr.detectChanges()
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
          // alert(this.defaultSelectedOrgId)
        }
      }
    });
  }

  getLastDateOfMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
  }


  ResetReport() {
    this.underTrialPrisoners
      = null;
  }

}
