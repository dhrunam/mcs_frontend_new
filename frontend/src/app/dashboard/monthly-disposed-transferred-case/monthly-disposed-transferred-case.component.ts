import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import { SubmitMonthlyStatementService } from '../services/submit-monthly-statement/submit-monthly-statement.service';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DisposedTransferredService } from './disposed-transferred-services';
import { HttpParams } from '@angular/common/http';
import { Filter } from '../shared/interfaces/filter.interface';
import { DisposedCasesReport, dummydata } from '../../shared/interfaces/disposed-transferred-case.interface';
@Component({
  selector: 'app-monthly-disposed-transferred-case',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './monthly-disposed-transferred-case.component.html',
  styleUrl: './monthly-disposed-transferred-case.component.css'
})
export class MonthlyDisposedTransferredCaseComponent {
  years: number[] = [];
  userList: any = [];
  currentYear: number = new Date().getFullYear();
  username: string = this.localStorageService.getUserName();
  organisationList: any = [];
  showLoader: boolean = false;


  
  filterData: Filter | null = null
  disposedTransferredCases: DisposedCasesReport [] |null=null;



  constructor(private authService: AuthService, private disposedTransferredService: DisposedTransferredService,
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
      this.disposedTransferredService.get_disposed_transferred_cases(data.value.month, data.value.year, data.value.case_type).subscribe(
        data => {
          this.disposedTransferredCases = data;
          console.log("Dispose data is ", data)
          // if(this.disposedTransferredCases.length==0){
            // this.disposedTransferredCases=dummydata.flatMap(caseItem=> caseItem.data)
          // }
          this.showLoader=false
        }
      )  
      // this.disposedTransferredCases = dummydata.flatMap(caseItem => caseItem.data)
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
    this.disposedTransferredCases
     = null;
  }
}
