import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import { SubmitMonthlyStatementService } from '../services/submit-monthly-statement/submit-monthly-statement.service';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DisposedTransferredService } from './disposed-transferred-services';
import { uploadedReportsDummy } from '../../shared/data/last-uploaded-reports';
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
  username: string = '';
  organisationList: any = [];
  showLoader: boolean = false;
  selectedFile: File | null = null;
  uploadMessage: string = '';
  lastUploadedReport: { month: string; year: string; uploaded_at: string } | null = null;


  
  filterData: Filter | null = null
  disposedTransferredCases: DisposedCasesReport [] |null=null;



  constructor(private authService: AuthService, private disposedTransferredService: DisposedTransferredService,
    private localStorageService: LocalStorageService){}


  ngOnInit(): void {
    AOS.init();
    this.years = this.generateYears();
    this.GetAllUserList();
    // Ensure username is read after DI is available
    this.username = this.localStorageService.getUserName() || '';
    // this.GetOrganizationList();
    this.years = this.generateYears();
    // Initialize last uploaded report from dummy data if not already set
    if (!this.lastUploadedReport && uploadedReportsDummy && uploadedReportsDummy.length > 0) {
      const latest = uploadedReportsDummy[0];
      this.lastUploadedReport = { month: latest.month, year: latest.year, uploaded_at: latest.uploaded_at };
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

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.uploadMessage = this.selectedFile.name;
    } else {
      this.selectedFile = null;
      this.uploadMessage = '';
    }
  }

  onUpload(form: NgForm) {
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
    fd.append('username', this.username || '');
    fd.append('month', month);
    fd.append('year', year);
    fd.append('case_type', case_type);
    fd.append('file', this.selectedFile as Blob, this.selectedFile?.name);

    this.disposedTransferredService.upload_disposed_transferred(fd).subscribe({
      next: (resp:any) => {
        this.uploadMessage = 'File uploaded successfully.';
        // Use server-provided timestamp if available, otherwise use local time
        const uploadedAt = resp && (resp.uploaded_at || resp.created_at || resp.timestamp) ? (resp.uploaded_at || resp.created_at || resp.timestamp) : new Date().toLocaleString();
        this.lastUploadedReport = { month: String(month), year: String(year), uploaded_at: uploadedAt };
        this.showLoader = false;
      },
      error: (err:any) => {
        console.error('Upload error', err);
        this.uploadMessage = 'Upload failed. Please try again.';
        this.showLoader = false;
      }
    });
  }
}
