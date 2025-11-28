import { Component } from '@angular/core';
import { Filter } from '../shared/interfaces/filter.interface';
import { AuthService } from '../../auth/auth.service';
import { DisposedTransferredService } from '../monthly-disposed-transferred-case/disposed-transferred-services';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import { PendingCaseReport } from '../../shared/interfaces/pending-case-report';
import AOS from 'aos';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PendingCaseService } from './pending-case-services';
@Component({
  selector: 'app-monthly-pending-cases',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './monthly-pending-cases.component.html',
  styleUrl: './monthly-pending-cases.component.css'
})
export class MonthlyPendingCasesComponent {
   years: number[] = [];
    userList: any = [];
    currentYear: number = new Date().getFullYear();
    username: string = this.localStorageService.getUserName();
    organisationList: any = [];
    showLoader: boolean = false;
  
  
    
    filterData: Filter | null = null
    pendingCases: PendingCaseReport [] |null=null;
  
  
  
    constructor(private authService: AuthService, private pendingCaseService: PendingCaseService,
      private localStorageService: LocalStorageService){}
  
  
    ngOnInit(): void {
      AOS.init();
      this.years = this.generateYears();
      this.GetAllUserList();
      // this.GetOrganizationList();
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
  
    // GetOrganizationList() {
    //   this.disposedTransferredService.GetOrganizations().subscribe({
    //     next: data => {
    //       console.log("GetOrganizationList:", data);
    //       this.organisationList = data;
    //     }
    //   });
    // }
  
  
    onSubmit(data:NgForm){
      
      if(data.invalid){
        data.control.markAllAsTouched()
      }
      else{
        this.showLoader = true
        this.pendingCaseService.get_monthly_pending_cases(data.value.month, data.value.year, data.value.case_type).subscribe(
          data => {
            this.pendingCases = data;
            console.log("Pending case data is ", data)
            // if(this.pendingCases.length==0){
              // this.pendingCases=dummydata.flatMap(caseItem=> caseItem.data)
            // }
            this.showLoader=false
          }
        )  
        // this.pendingCases = dummydata.flatMap(caseItem => caseItem.data)
        this.showLoader=false
      }
    }
  
    GetAllUserList() {
      this.authService.getAllUsers().subscribe({
        next: data => {
          console.log("GetAllUserList():", data);
          this.userList = data;
        }
      });
    }
  
    ResetReport() {
      this.pendingCases
       = null;
    }
}
