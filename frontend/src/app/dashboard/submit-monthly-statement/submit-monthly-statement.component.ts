import { Component } from '@angular/core';
import { CaseStatement } from '../../shared/interfaces/case-statement';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubmitMonthlyStatementService } from '../services/submit-monthly-statement/submit-monthly-statement.service';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import AOS from 'aos';
import { catchError, throwError } from 'rxjs';
import { ToastComponent } from '../shared/components/toast/toast.component';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-submit-monthly-statement',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastComponent],
  templateUrl: './submit-monthly-statement.component.html',
  styleUrl: './submit-monthly-statement.component.css'
})
export class SubmitMonthlyStatementComponent {
  constructor(private submitMonthlyStatementService: SubmitMonthlyStatementService,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private cdr: ChangeDetectorRef
  ) { }
  showLoader: boolean = false;
  isChecked: boolean = false;
  selectedMonth: string = '';
  selectedYear: number = 0;
  years: number[] = [];
  currentYear: number = new Date().getFullYear();
  username: string = this.localStorageService.getUserName();
  caseStatements: any = [];
  grandTotal: any = [];
  noOfWorkingDays: number = 0;
  userProfile: any;
  organisationList: any = [];
  userList: any = [];
  showErrorToast: boolean = false;
  selectedFile: File | null = null;
  selectedCivilCriminal: string = '';
  loginUserInfo: any = [];

  caseTypeList: any = [];
  selectedCaseType: number = 0;
  caseNo: string = '';
  petioner: string = '';
  responder: string = '';
  dateOfInstitution: Date = new Date();
  oldestCaseStatus: string = ''
  oldestCaseId: number = 0;
  filteredOrganization:any;


  ngOnInit(): void {
    AOS.init();
    this.years = this.generateYears();
    this.GetOrganizationList();
    this.GetAllUserList();
    this.GetLoginUserInfo();
    console.log("this.casestatements:", this.caseStatements);
  }

  private generateYears(): number[] {
    const startYear = this.currentYear - 10;
    const years = [];
    for (let year = this.currentYear+1; year >= startYear; year--) {
      years.push(year);
    }
    return years;
  }

  // CaseStatements: CaseStatement[] = [];

  GetOrganizationList() {
    this.submitMonthlyStatementService.GetOrganizations().subscribe({
      next: data => {
        this.organisationList = data;
      }
    });
  }

  GetOrganization(orgId:number){
    this.submitMonthlyStatementService.GetOrganization(orgId).subscribe({
      next: data => {
        this.filteredOrganization = data;
        console.log("this.filteredOrganization:",this.filteredOrganization);
      }
    });
  }

  GetCaseTypes() {
    this.submitMonthlyStatementService.GetCaseTypes(this.loginUserInfo.groups[0].name).subscribe({
      next: data => {
        this.caseTypeList = data.results;
        console.log("GetCaseTypes:", this.caseTypeList);
      }
    });
  }

  GetLoginUserInfo() {
    this.authService.getLoginUserInfo().subscribe({
      next: data => {
        this.loginUserInfo = data;
        this.GetOrganization(this.loginUserInfo.related_profile.organization);
        console.log("GetLoginUserInfo():", this.loginUserInfo);
        if (this.loginUserInfo) {
          this.GetCaseTypes();
        }
      }
    });
  }

  SubmitMonthlyStatement(): void {
    if(!this.FormValidation())
    {
      return;
    }
    if (!this.isChecked) {
      alert('Please check the declaration checkbox to proceed.');
      return;
    }
    const confirmed = window.confirm('Are you sure you want to final submit the monthly statement?');
    if (confirmed) {
      this.caseStatements.forEach((el: CaseStatement) => {
        el.is_draft = false;
      });

      const saveObj = {
        'report': this.caseStatements,
        'oldest_case': {
          'case_type': this.selectedCaseType,
          'case_no': this.caseNo,
          'petitioner': this.petioner,
          'responder': this.responder,
          'date_of_inst': this.dateOfInstitution,
          'remarks': '',
          'status': this.oldestCaseStatus,
          'report_year': this.selectedYear,
          'report_month': this.selectedMonth,
          'organization': this.loginUserInfo.related_profile.organization,
        }
      }
      console.log("SubmitMonthlyStatement():", saveObj);
      //return;
      this.submitMonthlyStatementService.SaveMonthlyStatement(saveObj).subscribe({
        next: data => {
          alert("Monthly Case Statement Submitted Successfully");
          this.ClearForm();
          this.LoadMonthlyStatement();
        },
        error: error => {
          console.error('Error Submitting Monthly Case Statements.', error);
          alert("Error Submitting Monthly Case Statements. Please try again.");
        }
      })

    }
  }

  ClearForm() {
    this.caseStatements = [];
    this.selectedCaseType = 0;
    this.caseNo = '';
    this.petioner = '';
    this.responder = '';
    this.dateOfInstitution = new Date();
    this.oldestCaseStatus = '';
    this.oldestCaseId = 0;
  }

  ResetReport() {
    this.caseStatements = [];
    this.ClearGrandTotal();
  }

  SaveMonthlyStatement(): void {
    if(!this.FormValidation())
    {
      return;
    }

    this.caseStatements.forEach((el: CaseStatement) => {
      el.is_draft = true;
    });
    const saveObj = {
      'report': this.caseStatements,
      'oldest_case': {
        'case_type': this.selectedCaseType,
        'case_no': this.caseNo,
        'petitioner': this.petioner,
        'responder': this.responder,
        'date_of_inst': this.dateOfInstitution,
        'remarks': '',
        'status': this.oldestCaseStatus,
        'report_year': this.selectedYear,
        'report_month': this.selectedMonth,
        'organization': this.loginUserInfo.related_profile.organization,
      }
    }
    console.log("save", saveObj);
    //return;
    this.submitMonthlyStatementService.SaveMonthlyStatement(saveObj).subscribe({
      next: data => {
        alert("Data Saved Successfully");
        this.ClearForm();
        this.LoadMonthlyStatement();
      },
      error: error => {
        alert("Error Saving Monthly Case Statements. Please Try Again.");
        console.error('Error Saving Monthly Case Statements.', error);
      }
    })
  }

  LoadMonthlyStatement(): void {
     this.showLoader = true;
    if (this.selectedMonth === '') {
      alert('Please select a month.');
      return;
    }
    if (this.selectedYear == 0) {
      alert('Please select a year.');
      return;
    }
    if (this.selectedCivilCriminal == '') {
      alert('Please select a case type.');
      return;
    }

    console.log(this.getPreviousMonthAndYear(this.selectedMonth, this.selectedYear));
    // this.showLoader = true;
    this.submitMonthlyStatementService.GetDraftMonthlyStatement(this.selectedMonth, this.selectedYear, this.selectedCivilCriminal).subscribe({
      next: data => {
        this.showLoader = false;
        console.log("Get monthly statement:", data);
        this.ClearGrandTotal();
        this.caseStatements = [];
        this.noOfWorkingDays = 0;
        if (data.length > 0) {
          console.log("draft result fetched");
          this.caseStatements = [];
          data.forEach((el: CaseStatement) => {
            const caseState = {
              id: el.report_id,
              case_type_id: el.case_type_id,
              desc_case: el.desc_case,
              pending_start_of_month: el.pending_start_of_month,
              instituted_during_the_month: el.instituted_during_the_month,
              total_count: el.total_count,
              count_disposed_contested: el.count_disposed_contested,
              count_disposed_uncontested: el.count_disposed_uncontested,
              count_disposed_transferred: el.count_disposed_transferred,
              pending_in_hand: el.pending_in_hand,
              pending_more_then_2yrs: el.pending_more_then_2yrs,
              pending_more_then_4yrs: el.pending_more_then_4yrs,
              date_of_oldest_case: el.date_of_oldest_case,
              unit: el.unit,
              no_of_working_days: el.no_of_working_days,
              report_year: parseInt(this.selectedYear.toString()),
              report_month: this.selectedMonth,
              remarks: el.remarks,
              is_draft: el.is_draft,
              updated_at: el.updated_at,
            };
            this.caseStatements.push(caseState);
          });
          this.noOfWorkingDays = data[0].no_of_working_days;
          this.calculateGrandTotal(this.caseStatements);
          this.GetOldestCaseDetails(this.selectedMonth, this.selectedYear, this.loginUserInfo.related_profile.organization, this.selectedCivilCriminal);
          this.cdr.detectChanges();
        }
        else {
          this.showLoader = false;
          console.log("no draft result");
          let previousMonthDetails = this.getPreviousMonthAndYear(this.selectedMonth, this.selectedYear);
          let month = previousMonthDetails.month;
          let year = previousMonthDetails.year;
          this.submitMonthlyStatementService.GetMonthlyStatement(month, year, this.selectedCivilCriminal).subscribe({
            next: data => {
              console.log("Get previous monthly statement:", data);
              this.ClearGrandTotal();
              if (data.length > 0) {
                console.log("previous result fetched", data);
                let result = [];
                result = data;
                this.caseStatements = [];
                result.forEach((el: CaseStatement) => {
                  const caseState = {
                    id: 0,
                    case_type_id: el.case_type_id,
                    desc_case: el.related_casetype?.desc_case,
                    pending_start_of_month: el.pending_start_of_month,
                    instituted_during_the_month: 0,
                    total_count: el.pending_start_of_month,
                    count_disposed_contested: 0,
                    count_disposed_uncontested: 0,
                    count_disposed_transferred: 0,
                    pending_in_hand: el.pending_start_of_month,
                    pending_more_then_2yrs: 0,
                    pending_more_then_4yrs: 0,
                    date_of_oldest_case: null,
                    unit: 0,
                    no_of_working_days: 0,
                    report_year: parseInt(this.selectedYear.toString()),
                    report_month: this.selectedMonth,
                    remarks: '',
                    is_draft: true,
                  };
                  this.caseStatements.push(caseState);
                });
                this.calculateGrandTotal(this.caseStatements);
                console.log("this.caseStatements:", this.caseStatements);
                this.GetOldestCaseDetails(month, year, this.loginUserInfo.related_profile.organization, this.selectedCivilCriminal);
                this.cdr.detectChanges();
              }
              else {
                this.showErrorToast = true;
                setTimeout(() => {
                  this.showErrorToast = false;
                }, 3000)
                this.cdr.detectChanges();
              }
            }
          }), catchError(err => {
            alert("An Unexpected Error Occoured");
             this.showErrorToast = false;
              this.cdr.detectChanges();
            return throwError(() => err);
          })
        }
      }
    }), catchError(err => {
      alert("An Unexpected Error Occoured");
       this.showErrorToast = false;
        this.cdr.detectChanges();
      return throwError(() => err);
    })
  }

  getPreviousMonthAndYear(currentMonth: string, currentYear: number): { month: string, year: number } {
    // Define an array of month names
    const months: string[] = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Find the index of the current month
    const currentIndex = months.indexOf(currentMonth);

    // Check if the input month is valid
    if (currentIndex === -1) {
      throw new Error(`Invalid month name: ${currentMonth}`);
    }

    // Calculate the previous month's index and adjust year if needed
    let previousIndex = currentIndex - 1;
    let previousYear = currentYear;

    if (previousIndex < 0) {
      // If the month is January, go to December of the previous year
      previousIndex = months.length - 1;
      previousYear--;
    }

    // Return the previous month and year as separate results
    return {
      month: months[previousIndex],
      year: previousYear // Ensure year is returned as a number
    };
  }

  calculateTotal(rowData: any, value: any) {
    if (rowData.pending_start_of_month < 0) {
      alert('Invalid entry! Please check the data.');
      rowData.pending_start_of_month = 0;
      return;
    }
    else if (rowData.instituted_during_the_month < 0) {
      alert('Invalid entry! Please check the data.');
      rowData.instituted_during_the_month = 0;
      return;
    }
    else if (rowData.count_disposed_contested < 0) {
      alert('Invalid entry! Please check the data.');
      rowData.count_disposed_contested = 0;
      return;
    }
    else if (rowData.count_disposed_uncontested < 0) {
      alert('Invalid entry! Please check the data.');
      rowData.count_disposed_uncontested = 0;
      return;
    }
    else if (rowData.count_disposed_transferred < 0) {
      alert('Invalid entry! Please check the data.');
      rowData.count_disposed_transferred = 0;
      return;
    }
    else if (rowData.pending_more_then_2yrs < 0) {
      alert('Invalid entry! Please check the data.');
      rowData.pending_more_then_2yrs = 0;
      return;
    }
    else if (rowData.pending_more_then_4yrs < 0) {
      alert('Invalid entry! Please check the data.');
      rowData.pending_more_then_4yrs = 0;
      return;
    }
    else if (rowData.unit < 0) {
      alert('Invalid entry! Please check the data.');
      rowData.unit = 0;
      return;
    }
    else if (rowData.no_of_working_days < 0) {
      alert('Invalid entry! Please check the data.');
      rowData.no_of_working_days = 0;
      return;
    }

    rowData.total_count = rowData.pending_start_of_month + rowData.instituted_during_the_month;
    rowData.pending_in_hand = rowData.total_count - (rowData.count_disposed_contested + rowData.count_disposed_uncontested + rowData.count_disposed_transferred);
    console.log("rowData.pending_in_hand", rowData.pending_in_hand);
    if (rowData.pending_in_hand == 0) {
      rowData.date_of_oldest_case = null;
    }
    this.calculateGrandTotal(this.caseStatements);
  }

  calculateGrandTotal(data: any) {
    this.grandTotal = {
      pending_start_of_month: 0,
      instituted_during_the_month: 0,
      total_count: 0,
      count_disposed_contested: 0,
      count_disposed_uncontested: 0,
      count_disposed_transferred: 0,
      pending_in_hand: 0,
      pending_more_then_2yrs: 0,
      pending_more_then_4yrs: 0,
      unit: 0,
      no_of_working_days: 0
    };

    data.forEach((el: CaseStatement) => {
      this.grandTotal.pending_start_of_month += el.pending_start_of_month;
      this.grandTotal.instituted_during_the_month += el.instituted_during_the_month;
      this.grandTotal.total_count += el.total_count;
      this.grandTotal.count_disposed_contested += el.count_disposed_contested;
      this.grandTotal.count_disposed_uncontested += el.count_disposed_uncontested;
      this.grandTotal.count_disposed_transferred += el.count_disposed_transferred;
      this.grandTotal.pending_in_hand += el.pending_in_hand;
      this.grandTotal.pending_more_then_2yrs += el.pending_more_then_2yrs;
      this.grandTotal.pending_more_then_4yrs += el.pending_more_then_4yrs;
      this.grandTotal.unit += el.unit;
      this.grandTotal.no_of_working_days = el.no_of_working_days;
    });
  }

  ClearGrandTotal() {
    this.grandTotal = {
      pending_start_of_month: 0,
      instituted_during_the_month: 0,
      total_count: 0,
      count_disposed_contested: 0,
      count_disposed_uncontested: 0,
      count_disposed_transferred: 0,
      pending_in_hand: 0,
      pending_more_then_2yrs: 0,
      pending_more_then_4yrs: 0,
      unit: 0,
      no_of_working_days: 0
    };
  }

  changedNoOfWorkingDays() {
    if (this.noOfWorkingDays < 0) {
      alert('Invalid entry! Please check the data.');
      this.noOfWorkingDays = 0;
      return;
    }
    this.caseStatements.forEach((el: CaseStatement) => {
      el.no_of_working_days = this.noOfWorkingDays
    });
    this.calculateGrandTotal(this.caseStatements);

  }

  GetAllUserList() {
    this.authService.getAllUsers().subscribe({
      next: data => {
        console.log("GetAllUserList():", data);
        this.userList = data;
      }
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log("file changed", this.selectedFile);
    }
  }

  onSubmit() {
    console.log("onSubmit:", this.selectedFile);
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      this.uploadFile(formData);
    }
  }

  uploadFile(formData: FormData) {
    console.log("uploadFile called:", formData);
    return;

    this.submitMonthlyStatementService.uploadMonthlyStatementFile(formData).subscribe({
      next: data => {
        alert("File Uploaded Successfully");
      },
      error: error => {
        alert("Error uploading file: Please Try Again.");
        console.error('Error uploading file.', error);
      }
    })
  }

  GetOldestCaseDetails(month: string, year: number, organization: number, civil_criminal:string) {
    console.log("get oldest case called:");
    this.submitMonthlyStatementService.GetOldestCaseDetails(month, year, organization, civil_criminal).subscribe({
      next: data => {
        console.log("GetOldestCaseDetails:", data);
        // this.oldestCaseId = ;
        this.selectedCaseType = data.case_type;
        this.caseNo = data.case_no;
        this.petioner = data.petitioner;
        this.responder = data.responder;
        this.dateOfInstitution = data.date_of_inst;
        this.oldestCaseStatus = data.status;
      }
    }), catchError(err => {
      alert("An Unexpected Error Occoured");
      return throwError(() => err);
    });
  }

  FormValidation(): boolean {
    for (let el of this.caseStatements) {
      if (el.pending_in_hand > 0 && el.date_of_oldest_case == null) {
        alert("Date of oldest case is required for " + el.desc_case);
        return false;
      }
    }
    return true;
  }


OnOrganizationChange(event: Event){
  this.ResetReport();
  const value = (event.target as HTMLSelectElement).value;
  console.log('Selected value:', value);
  this.submitMonthlyStatementService.GetOrganization(parseInt(value)).subscribe({
    next: data => {
      this.filteredOrganization = data;
      console.log("this.filteredOrganization:",this.filteredOrganization);
    }
  });
}



}
