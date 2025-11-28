import { Component } from '@angular/core';
import AOS from 'aos';
import { Filter } from '../shared/interfaces/filter.interface';
import { PendingCaseReport } from '../../shared/interfaces/pending-case-report';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import { FormsModule, NgForm } from '@angular/forms';
import { courtFeeService } from './court-fee-service';
import { CommonModule } from '@angular/common';
import { CourtFee } from './court-fee.interface';
@Component({
  selector: 'app-monthly-court-fees',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './monthly-court-fees.component.html',
  styleUrl: './monthly-court-fees.component.css'
})
export class MonthlyCourtFeesComponent {
 years: number[] = [];
    userList: any = [];
    currentYear: number = new Date().getFullYear();
    username: string = this.localStorageService.getUserName();
    organisationList: any = [];
    showLoader: boolean = false;
  
  
    
    filterData: Filter | null = null
    courtFees: CourtFee [] |null=null;
  
  
  
    constructor(private authService: AuthService, private courtFeeservice: courtFeeService,
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
        this.courtFeeservice.get_monthly_court_fees(data.value.month, data.value.year).subscribe(
          data => {
            this.courtFees = data;
            console.log("Court fee case data is ", data)
            // if(this.courtFees.length==0){
              // this.courtFees=dummydata.flatMap(caseItem=> caseItem.data)
            // }
            this.showLoader=false
          }
        )  
        // this.courtFees = dummydata.flatMap(caseItem => caseItem.data)
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
      this.courtFees
       = null;
    }
}
