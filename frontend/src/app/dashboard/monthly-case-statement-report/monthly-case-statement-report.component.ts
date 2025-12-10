import { Component } from '@angular/core';
import { SubmitMonthlyStatementService } from '../services/submit-monthly-statement/submit-monthly-statement.service';
import { AuthService } from '../../auth/auth.service';
import { LocalStorageService } from '../../auth/local-storage/local-storage.service';
import { CaseStatement } from '../../shared/interfaces/case-statement';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Organization } from '../../shared/interfaces/organization';
import { UserProfile } from '../../shared/interfaces/user-profile';
import AOS from 'aos';
import { Filter } from '../shared/interfaces/filter.interface';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-monthly-case-statement-report',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './monthly-case-statement-report.component.html',
  styleUrl: './monthly-case-statement-report.component.css'
})
export class MonthlyCaseStatementReportComponent {
  constructor(private submitMonthlyStatementService: SubmitMonthlyStatementService,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private cdr: ChangeDetectorRef
  ){}
isChecked: boolean = false;
selectedMonth:string = '';
selectedYear:number = 0;
selectedUser:string='';
selectedOrganization:string='';
years: number[] = [];
currentYear: number = new Date().getFullYear();
username:string = this.localStorageService.getUserName();
caseStatements:any = [];
grandTotal:any = [];
noOfWorkingDays: number = 0;
organisationList:any= [];
userList:any = [];
filteredOrganization:any;
filteredUser:any=[];
selectedCivilCriminal:string='';
showLoader: boolean = false;


ngOnInit(): void {
AOS.init();
this.years = this.generateYears();
this.GetAllUserList();
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

calculateTotal(rowData:any, value:any){
  if(rowData.pending_start_of_month<0)
  {
    alert('Invalid entry! Please check the data.');
    rowData.pending_start_of_month = 0;
    return;
  }
  else if(rowData.instituted_during_the_month<0)
  {
    alert('Invalid entry! Please check the data.');
    rowData.instituted_during_the_month = 0;
    return;
  }
  else if(rowData.count_disposed_contested<0)
    {
      alert('Invalid entry! Please check the data.');
      rowData.count_disposed_contested = 0;
      return;
    }
  else if(rowData.count_disposed_uncontested<0)
    {
      alert('Invalid entry! Please check the data.');
      rowData.count_disposed_uncontested = 0;
      return;
    }
  else if(rowData.count_disposed_transferred<0)
    {
      alert('Invalid entry! Please check the data.');
      rowData.count_disposed_transferred = 0;
      return;
    }
  else if(rowData.pending_more_then_2yrs<0)
    {
      alert('Invalid entry! Please check the data.');
      rowData.pending_more_then_2yrs = 0;
      return;
    }
  else if(rowData.pending_more_then_4yrs<0)
    {
      alert('Invalid entry! Please check the data.');
      rowData.pending_more_then_4yrs = 0;
      return;
    }
  else if(rowData.unit<0)
    {
      alert('Invalid entry! Please check the data.');
      rowData.unit = 0;
      return;
    }
  else if(rowData.no_of_working_days<0)
    {
      alert('Invalid entry! Please check the data.');
      rowData.no_of_working_days = 0;
      return;
    }

  rowData.total_count = rowData.pending_start_of_month + rowData.instituted_during_the_month;
  rowData.pending_in_hand = rowData.total_count - (rowData.count_disposed_contested+rowData.count_disposed_uncontested+rowData.count_disposed_transferred);
  this.calculateGrandTotal(this.caseStatements);
}

calculateGrandTotal(data:any)
{
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

  data.forEach((el:CaseStatement) => {
    this.grandTotal.pending_start_of_month+=el.pending_start_of_month;
    this.grandTotal.instituted_during_the_month+=el.instituted_during_the_month;
    this.grandTotal.total_count+=el.total_count;
    this.grandTotal.count_disposed_contested+=el.count_disposed_contested;
    this.grandTotal.count_disposed_uncontested+=el.count_disposed_uncontested;
    this.grandTotal.count_disposed_transferred+=el.count_disposed_transferred;
    this.grandTotal.pending_in_hand+=el.pending_in_hand;
    this.grandTotal.pending_more_then_2yrs+=el.pending_more_then_2yrs;
    this.grandTotal.pending_more_then_4yrs+=el.pending_more_then_4yrs;
    this.grandTotal.unit+=el.unit;
    this.grandTotal.no_of_working_days=el.no_of_working_days;
  });
}

ClearGrandTotal(){
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

LoadMonthlyStatement(): void{
  console.log("this.selectedUser:",this.selectedUser);
  this.showLoader = true;
  if(this.selectedMonth === '')
  {
    alert('Please select a month.');
    return;
  }
  if(this.selectedYear == 0)
  {
    alert('Please select a year.');
    return;
  }
  if(this.selectedOrganization == '')
  {
    alert('Please select an Organization');
    return;
  }
  if(this.selectedCivilCriminal == '')
  {
    alert('Please select case type');
    return;
  }

  // this.filteredUser = this.userList.filter((u: UserProfile)=> u.id === parseInt(this.selectedUser))[0];
  // this.filteredOrganization = this.organisationList.filter((o: Organization) => o.id === parseInt(this.filteredUser.related_profile.organization))[0];


  // console.log("this.filteredOrganization:",this.filteredOrganization);
  // console.log("his.filteredUser:",this.filteredUser);

  this.submitMonthlyStatementService.GetMonthlyCaseStatementReport(this.selectedMonth,this.selectedYear,this.selectedOrganization,this.selectedCivilCriminal).subscribe({
    next: data => {
      this.caseStatements = [];
      this.ClearGrandTotal();
      if(data && data.length > 0)
      {
        console.log("monthly statement fetched",data);
        let result = [];
        result = data;
        result.forEach((el:CaseStatement) => {
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
            is_draft: el.is_draft
          };
          this.caseStatements.push(caseState);
        });
        this.noOfWorkingDays = data[0].no_of_working_days;
        this.calculateGrandTotal(this.caseStatements);
        console.log("this.caseStatements:",this.caseStatements);
        this.showLoader = false;
        this.cdr.detectChanges();
      }
      else{
        alert("No Records Found");
        this.showLoader = false;
      }
    }
  })


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

      doc.save('MonthlyCaseStatementReport_'+this.filteredOrganization.organization_shortname+'_'+this.selectedMonth+'_'+this.selectedYear+'.pdf');
    });
  }
}

GetOrganizationList()
{
  this.submitMonthlyStatementService.GetOrganizations().subscribe({
    next: data => {
      console.log("GetOrganizationList:",data);
      this.organisationList = data;
    }
  });
}

GetAllUserList()
{
  this.authService.getAllUsers().subscribe({
    next: data=>{
      console.log("GetAllUserList():",data);
      this.userList = data;
    }
  });
}

ResetReport()
{
  this.caseStatements = [];
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
