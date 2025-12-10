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
import { uploadedReportsDummy } from '../../shared/data/last-uploaded-reports';
import { ChangeDetectorRef } from '@angular/core';
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
    selectedFile: File | null = null;
    uploadMessage: string = '';
    lastUploadedReport: any = null;
    last_uploaded_file_details: any = null;



    filterData: Filter | null = null
    pendingCases: PendingCaseReport [] |null=null;



    constructor(private authService: AuthService, private pendingCaseService: PendingCaseService,
      private localStorageService: LocalStorageService, private cdr: ChangeDetectorRef){}


    ngOnInit(): void {
      AOS.init();
      this.years = this.generateYears();
      this.GetAllUserList();
      // this.GetOrganizationList();
      this.years = this.generateYears();
      this.LoadLastUploadedData();
      // Initialize last uploaded report from dummy data if not present

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

    get_last_uploaded_file_details() {
      this.pendingCaseService.get_last_uploaded_details().subscribe({
        next: data => {
          console.log("Last uploaded file details:", data);
          // Process the data as needed
          this.last_uploaded_file_details = data;
        }});
    }

    ResetReport() {
      this.pendingCases
       = null;
    }

    onFileSelected(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
        this.uploadMessage = this.selectedFile.name;


      }
      else {
        this.selectedFile = null;
        this.uploadMessage = '';
      }
    }

    onUpload(form: NgForm) {
      console.log("Upload form data:", form.value);
      if (!form || form.invalid) {
        form.control.markAllAsTouched && form.control.markAllAsTouched();
        this.uploadMessage = 'Please select month, year and case type before uploading.';
        return;
      }
      if (!this.selectedFile) {
        this.uploadMessage = 'Please select a file to upload.';
        return;
      }

      const month = form.value.month;
      const year = form.value.year;
      const case_type = form.value.case_type;

      if (!month || !year || !case_type) {
        this.uploadMessage = 'Please select month, year and case type before uploading.';
        return;
      }

      this.showLoader = true;
      const fd = new FormData();
      fd.append('username', this.localStorageService.getUserName() || '');
      fd.append('report_month', month);
      fd.append('report_year', year);
      fd.append('civil_criminal', case_type);
      fd.append('file', this.selectedFile as Blob, this.selectedFile?.name);
      // console.log("FormData to be uploaded after file set:", fd.value);



      this.pendingCaseService.upload_pending_cases(fd).subscribe({
        next: (resp: any) => {
          this.uploadMessage = 'File uploaded successfully.';
          const uploadedAt = resp && (resp.uploaded_at || resp.created_at || resp.timestamp) ? (resp.uploaded_at || resp.created_at || resp.timestamp) : new Date().toLocaleString();
          this.LoadLastUploadedData();
          this.showLoader = false;
        },
        error: (err: any) => {
          console.error('Upload error', err);
          this.uploadMessage = 'Upload failed. Please try again.';
          this.showLoader = false;
        }
      });
    }

    LoadLastUploadedData() {
    this.pendingCaseService
      .get_last_uploaded_details()
      .subscribe({
        next: (data: any) => {
          // console.log("Last uploaded disposed transferred data:", data);
          // this.getLatestReport = data.results;

          this.lastUploadedReport = data;
          this.cdr.detectChanges();
        },
        error: (err: any) => {
          console.error("Error fetching last uploaded disposed transferred data:", err);
        }
      });
  }
}
