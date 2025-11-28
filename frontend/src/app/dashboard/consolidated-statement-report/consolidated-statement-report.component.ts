import { Component } from '@angular/core';
import { SubmitMonthlyStatementService } from '../services/submit-monthly-statement/submit-monthly-statement.service';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import { ToastComponent } from '../shared/components/toast/toast.component';
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-consolidated-statement-report',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastComponent],
  templateUrl: './consolidated-statement-report.component.html',
  styleUrl: './consolidated-statement-report.component.css'
})
export class ConsolidatedStatementReportComponent {
  constructor(private submitMonthlyStatementService: SubmitMonthlyStatementService,
    private authService: AuthService,
    private localStorageService: LocalStorageService) { }

  selectedMonth: string = '';
  selectedYear: number = 0;
  selectedUser: string = '';
  years: number[] = [];
  currentYear: number = new Date().getFullYear();
  username: string = this.localStorageService.getUserName();
  caseStatements: any = [];
  organisationList: any = [];
  userList: any = [];
  filteredOrganization: any;
  filteredUser: any = [];
  showErrorToast: boolean = false;

  ngOnInit(): void {
    AOS.init();
    this.years = this.generateYears();
    this.GetOrganizationList();
  }
  private generateYears(): number[] {
    const startYear = this.currentYear - 10;
    const years = [];
    for (let year = this.currentYear; year >= startYear; year--) {
      years.push(year);
    }
    return years;
  }

  GetOrganizationList() {
    this.submitMonthlyStatementService.GetOrganizations().subscribe({
      next: data => {
        console.log("GetOrganizationList:", data);
        this.organisationList = data;
      }
    });
  }

  LoadConsolidatedStatement() {
    if (this.selectedMonth === '') {
      alert('Please select a month.');
      return;
    }
    if (this.selectedYear == 0) {
      alert('Please select a year.');
      return;
    }
    this.submitMonthlyStatementService.GetConsolidatedMonthlyCaseStatementReport(this.selectedMonth, this.selectedYear).subscribe({
      next: data => {
        console.log('LoadConsolidatedStatement:', data);
        this.caseStatements = [];
        if (data.length > 0) {
          this.caseStatements = data;
        }
        else {
          alert("No Records Found");
        }
      }
    }), catchError(err => {
      alert("An Unexpected Error Occoured");
      return throwError(() => err);
    });
  }

  GenerateReport() {
    const data = document.getElementById('table-to-pdf'); // The ID of the table you want to export
    if (data) {
      html2canvas(data).then(canvas => {
        const doc = new jsPDF('l', 'mm', 'a4'); // 'l' for landscape
        const margin = 12.7; // 1 inch margin in mm
        const pageWidth = 297; // A4 width in mm for landscape
        const pageHeight = 210; // A4 height in mm for landscape

        // Calculate the available width and height for the content
        const imgWidth = pageWidth - 2 * margin;
        const imgHeight = canvas.height * imgWidth / canvas.width;

        // Add the first page with content
        let position = margin;
        doc.addImage(canvas.toDataURL('image/png'), 'PNG', margin, position, imgWidth, imgHeight);

        // Calculate height left for multiple pages if needed
        let heightLeft = imgHeight - (pageHeight - 2 * margin);
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(canvas.toDataURL('image/png'), 'PNG', margin, position + margin, imgWidth, imgHeight);
          heightLeft -= pageHeight - 2 * margin;
        }

        doc.save('ConsolidatedStatementReport_' + this.selectedMonth + '_' + this.selectedYear + '.pdf');
      });
    }
  }

  ResetReport() {
    this.caseStatements = [];
  }

}
