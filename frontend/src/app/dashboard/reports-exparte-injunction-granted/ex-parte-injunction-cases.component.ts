// ex-parte-injunction-cases.component.ts

import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import { ExParteInjunctionCase } from './ex-parte-injunction-case.interface';
import { ExParteInjunctionCasesService } from './ex-parte-injunction-cases.services';

@Component({
  selector: 'app-ex-parte-injunction-cases',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ex-parte-injunction-cases.component.html',
  styleUrl: './ex-parte-injunction-cases.component.css' // You will need to create this CSS file
})
export class ExParteInjunctionCasesComponent implements OnInit {

  years: number[] = [];
  userList: any = [];
  currentYear: number = new Date().getFullYear();
  username: string = this.localStorageService.getUserName();
  organisationList: any = [];
  showLoader: boolean = false;

  lastDateOfMonth: any = ''
  filterData: any;
  exParteInjunctionCases: ExParteInjunctionCase[] | null = null;
  allExParteInjunctionCases: ExParteInjunctionCase[] = []
  casetypeNames: string[] = []
  defaultSelectedOrgId: number | null = null
  filteredOrganization: string = ''

  constructor(private authService: AuthService, private exParteInjunctionCasesService: ExParteInjunctionCasesService,
    private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    AOS.init();
    this.years = this.generateYears();
    this.GetAllUserList();
    this.GetOrganizationList();
  }

  GetOrganizationList() {
    this.exParteInjunctionCasesService.getOrganizations().subscribe({
      next: data => {
        console.log("GetOrganizationList:", data);
        this.organisationList = data;
      }
    });
  }

  private generateYears(): number[] {
    const startYear = this.currentYear - 10;
    const years = [];
    for (let year = this.currentYear; year >= startYear; year--) {
      years.push(year);
    }
    return years;
  }

  filterDataByTypeName(event: any) {
    const selectedType = event.target.value

    if (selectedType === 'All') {
      this.exParteInjunctionCases = this.allExParteInjunctionCases // Show all data
    } else {
      this.exParteInjunctionCases = this.allExParteInjunctionCases && this.allExParteInjunctionCases.filter(
        caseItem => caseItem.type_name === selectedType
      );
    }
  }

  onSubmit(formdata: NgForm) {
    var org_id = formdata.value.user
    if (formdata.invalid) {
      formdata.control.markAllAsTouched()
    }
    else {
      this.showLoader = true
      if (this.defaultSelectedOrgId) {
        formdata.value.user = this.defaultSelectedOrgId
        org_id = this.defaultSelectedOrgId
      }
      this.filteredOrganization = (this.organisationList as any[]).find(x => x.id == org_id
      )?.organization_name ?? '';

      this.exParteInjunctionCasesService.getExParteInjunctionCases(formdata.value.month, formdata.value.year, formdata.value.user, formdata.value.case_type).subscribe(
        data => {
          this.exParteInjunctionCases = data;
          this.allExParteInjunctionCases = data;
          
          this.casetypeNames = ['All', ...new Set(this.exParteInjunctionCases.map(caseItem => caseItem.type_name))];
          console.log("Ex Parte Injunction case list data is ", data)
          this.lastDateOfMonth = this.getLastDateOfMonth(Number(formdata.value.month), Number(formdata.value.year));
          this.showLoader = false
        },
        error => {
          console.error("Error fetching ex parte injunction cases: ", error);
          this.showLoader = false;
        }
      )
    }
  }

  GetAllUserList() {
    this.authService.getAllUsers().subscribe({
      next: data => {
        console.log("GetAllUserList():", data);
        this.userList = data;
        if (this.username !== 'hcs_admin') {
          this.defaultSelectedOrgId = (this.userList as any[]).find(x => x.username === this.username)?.related_profile.organization ?? 'none';
        }
      }
    });
  }

  getLastDateOfMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
  }

  ResetReport() {
    this.exParteInjunctionCases = null;
  }
}