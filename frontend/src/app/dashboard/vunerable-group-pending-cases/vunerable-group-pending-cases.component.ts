import { Component } from '@angular/core';
import { Filter } from '../shared/interfaces/filter.interface';
import { VulnerableGroupPendingCase } from './vulnerable-group-pending-case.interface';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import { VulnerableGroupCaseService } from './vulnerable-group-case.service';
import AOS from 'aos';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vunerable-group-pending-cases',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './vunerable-group-pending-cases.component.html',
  styleUrl: './vunerable-group-pending-cases.component.css'
})
export class VunerableGroupPendingCasesComponent {
  years: number[] = [];
  userList: any = [];
  currentYear: number = new Date().getFullYear();
  username: string = this.localStorageService.getUserName();
  organisationList: any = [];
  showLoader: boolean = false;



  filterData: any | null = null
  vulnerableOtherGroupCases: VulnerableGroupPendingCase[] | null = null;
  lastDateOfMonth:any| number=''


  allVulnerableOtherGroupCases: VulnerableGroupPendingCase[] = []
  casetypeNames: string[] = []
  defaultSelectedOrgId: number | null = null
  filteredOrganization: string = ''


  constructor(private authService: AuthService, private vulnerableOtherGroupService: VulnerableGroupCaseService,
    private localStorageService: LocalStorageService) { }


  ngOnInit(): void {
    AOS.init();
    this.years = this.generateYears();
    this.GetAllUserList();
    this.GetOrganizationList();
    this.years = this.generateYears();
  }

  GetOrganizationList() {
    this.vulnerableOtherGroupService.getOrganizations().subscribe({
      next: data => {
        console.log("GetOrganizationList:", data);
        this.organisationList = data;

      }
    });
  }



  filterDataByTypeName(event: any) {
    const selectedType = event.target.value

    if (selectedType === 'All')
    {
      this.vulnerableOtherGroupCases = this.allVulnerableOtherGroupCases // Show all data
    } else
    {
      this.vulnerableOtherGroupCases = this.allVulnerableOtherGroupCases && this.allVulnerableOtherGroupCases.filter(
        caseItem => caseItem.type_name === selectedType
      );
    }
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

  getLastDateOfMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
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
    var org_id=formdata.value.user
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
        org_id=this.defaultSelectedOrgId
      }
      this.filteredOrganization = (this.organisationList as any[]).find(x => x.id == org_id
      )?.organization_name ?? '';
      this.vulnerableOtherGroupService.get_monthly_vulnerable_group_cases(formdata.value.month, formdata.value.year,formdata.value.user,formdata.value.case_type).subscribe(
        data => {
          this.vulnerableOtherGroupCases = data;
          this.allVulnerableOtherGroupCases = data;
         
          this.casetypeNames = ['All', ...new Set(this.vulnerableOtherGroupCases.map(caseItem => caseItem.type_name))];
          console.log("Monthly vulnerable case data is ", data)
          this.lastDateOfMonth = this.getLastDateOfMonth(Number(formdata.value.month), Number(formdata.value.year));
          // if(this.vulnerableOtherGroupCases.length==0){
          // this.vulnerableOtherGroupCases=dummydata.flatMap(caseItem=> caseItem.data)
          // }
          this.showLoader = false
          
        }
      )
      // this.vulnerableOtherGroupCases = dummydata.flatMap(caseItem => caseItem.data)
      
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

  ResetReport() {
    this.vulnerableOtherGroupCases
      = null;
  }
}
