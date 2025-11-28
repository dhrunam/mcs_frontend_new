import { Component } from '@angular/core';
import { SubmitMonthlyStatementService } from '../services/submit-monthly-statement/submit-monthly-statement.service';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import AOS from 'aos';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../shared/components/toast/toast.component';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-monthly-disposal-and-pending-report',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastComponent],
  templateUrl: './monthly-disposal-and-pending-report.component.html',
  styleUrl: './monthly-disposal-and-pending-report.component.css'
})
export class MonthlyDisposalAndPendingReportComponent {
  constructor(private submitMonthlyStatementService: SubmitMonthlyStatementService,
    private authService: AuthService,
    private localStorageService: LocalStorageService) { }

  selectedMonth: string = '';
  selectedYear: number = 0;
  selectedOrganization: number = 0;
  years: number[] = [];
  currentYear: number = new Date().getFullYear();
  username: string = this.localStorageService.getUserName();
  disposalReport: any = [];
  organisationList: any = [];
  showLoader: boolean = false;
  selectedCivilCriminal: string = '';
  ngOnInit(): void {
    AOS.init();
    this.years = this.generateYears();
    // this.GetAllUserList();
    this.GetOrganizationList();
    console.log("this.disposalReport:",this.disposalReport);
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

  GetAllUserList() {
    this.authService.getAllUsers().subscribe({
      next: data => {
        console.log("GetAllUserList():", data);
        //this.userList = data;
      }
    });
  }

  LoadDisposalReport() {
    this.showLoader = true;
    if (this.selectedMonth === '') {
      alert('Please select a month.');
      return;
    }
    if (this.selectedYear == 0) {
      alert('Please select a year.');
      return;
    }
    if (this.selectedOrganization == 0) {
      alert('Please select a user');
      return;
    }

    this.submitMonthlyStatementService.GetMonthlyDisposalReport(this.selectedMonth, this.selectedYear, this.selectedOrganization).subscribe({
      next: data => {
        this.disposalReport = [];
        console.log("monthly disposal report fetched", data);
        let result = [];
        result = data;
        this.disposalReport = result;


        console.log("this.caseStatements:", this.disposalReport);
        this.showLoader = false;

      }
    }), catchError(err => {
      alert("An Unexpected Error Occoured");
      this.showLoader = false;
      return throwError(() => err);
    });
  }

  ResetReport() {
    this.disposalReport = [];
  }

  GenerateReport() {
    const data = document.getElementById('table-to-pdf'); // The ID of the table to export
    if (data) {
      // Step 1: Create and insert temporary styles
      const tempStyles = document.createElement('style');
      tempStyles.innerHTML = `
        #table-to-pdf {
          font-size: 24px; /* Adjust font size */
          color: #333; /* Adjust text color */
          border:none !important
        }
        #table-to-pdf th, #table-to-pdf td {
          padding: 10px; /* Adjust cell padding */
        }
          .pdf-border{
            border-left:1px solid black;
            border-right:1px solid black;
          }
          // td{
          //   border:1px solid white 
          // }
        /* Add any additional temporary styles here */
      `;
      document.head.appendChild(tempStyles);
  
      // Step 2: Capture the canvas
      html2canvas(data).then(canvas => {
        // Remove temporary styles after capturing
        document.head.removeChild(tempStyles);
  
        // Step 3: Generate the PDF
        const doc = new jsPDF('p', 'mm', 'a4'); // 'l' for landscape
        const margin = 12.7; // 1-inch margin in mm
        const pageWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
  
        const imgWidth = pageWidth - 2 * margin;
        const imgHeight = canvas.height * imgWidth / canvas.width;
  
        // Add the first page with content
        let position = margin;
        doc.addImage(canvas.toDataURL('image/png'), 'PNG', margin, position, imgWidth, imgHeight);
  
        // Handle multi-page content
        let heightLeft = imgHeight - (pageHeight - 2 * margin);
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(canvas.toDataURL('image/png'), 'PNG', margin, position + margin, imgWidth, imgHeight);
          heightLeft -= pageHeight - 2 * margin;
        }
  
        doc.save('MonthlyDisposalReport_' + this.selectedMonth + '_' + this.selectedYear + '.pdf');
      });
    }
  }
  

}
