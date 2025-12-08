import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import { uploadedReportsDummy } from '../../shared/data/last-uploaded-reports';
import AOS from 'aos';
import { UploadExParteInjunctionGrantedCasesService } from './upload-ex-parte-injunction-granted-cases.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-upload-ex-parte-injunction-granted-cases',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload-ex-parte-injunction-granted-cases.component.html',
  styleUrl: './upload-ex-parte-injunction-granted-cases.component.css'
})
export class UploadExParteInjunctionGrantedCasesComponent {
  years: number[] = [];
  currentYear = new Date().getFullYear();
  selectedFile: File | null = null;
  uploadMessage = '';
  lastUploadedReport: any | null = null;
  showLoader = false;

  constructor(private authService: AuthService,
    private svc: UploadExParteInjunctionGrantedCasesService,
    private localStorageService: LocalStorageService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.years = this.generateYears();
    this.LoadLastUploadedData();
  }

  private generateYears(): number[] {
    const start = this.currentYear - 10;
    const arr: number[] = [];
    for (let y = this.currentYear; y >= start; y--) arr.push(y);
    return arr;
  }

  onFileSelected(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
      this.uploadMessage = this.selectedFile.name;
    } else {
      this.selectedFile = null;
      this.uploadMessage = '';
    }
  }
  LoadLastUploadedData() {
    this.svc.get_last_uploaded_details()
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

  onUpload(form: NgForm) {
    if (!form || form.invalid) {
      form.control.markAllAsTouched && form.control.markAllAsTouched();
      this.uploadMessage = 'Select month, year and case type before uploading.';
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
      this.uploadMessage = 'Select month, year and case type before uploading.';
      return;
    }

    this.showLoader = true;
    const fd = new FormData();
    fd.append('username', this.localStorageService.getUserName() || '');
    fd.append('report_month', month);
    fd.append('report_year', year);
    fd.append('civil_criminal', case_type);
    fd.append('file', this.selectedFile as Blob, this.selectedFile?.name);

    this.svc.upload_ex_parte_injunction_granted_cases(fd).subscribe({
      next: (resp: any) => {
        this.uploadMessage = 'Upload successful.';
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
}
