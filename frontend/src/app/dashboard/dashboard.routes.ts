import { Routes } from "@angular/router";
import { authGuard } from "../auth/guards/route/auth.guard";

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard/monthly-statement-reports', pathMatch: 'full' },
    {
        path: '', loadComponent: () => import('./dashboard.component').then(c => c.DashboardComponent),
        children: [
            { path: 'submit-monthly-statement', loadComponent: () => import('./submit-monthly-statement/submit-monthly-statement.component').then(c => c.SubmitMonthlyStatementComponent)},
            { path: 'monthly-statement-reports', loadComponent: () => import('./monthly-case-statement-report/monthly-case-statement-report.component').then(c => c.MonthlyCaseStatementReportComponent)},
            { path: 'consolidated-statement-report', loadComponent: () => import('./consolidated-statement-report/consolidated-statement-report.component').then(c => c.ConsolidatedStatementReportComponent)},
            { path: 'monthly-disposal-report', loadComponent: () => import('./monthly-disposal-and-pending-report/monthly-disposal-and-pending-report.component').then(c => c.MonthlyDisposalAndPendingReportComponent)},
            {path:'monthly-disposed-transferred-case',loadComponent:()=>import('./monthly-disposed-transferred-case/monthly-disposed-transferred-case.component').then(c=>c.MonthlyDisposedTransferredCaseComponent)},
            { path: 'upload-monthly-pending-cases', loadComponent: () => import('./monthly-pending-cases/monthly-pending-cases.component').then(c => c.MonthlyPendingCasesComponent) },
            { path: 'upload-statement-of-court-fees-or-fines', loadComponent: () => import('./upload-statement-of-court-fees-or-fines/upload-statement-of-court-fees-or-fines.component').then(c => c.UploadStatementOfCourtFeesOrFinesComponent) },
            { path: 'upload-cases-of-under-prisoners', loadComponent: () => import('./upload-cases-of-under-prisoners/upload-cases-of-under-prisoners.component').then(c => c.UploadCasesOfUnderPrisonersComponent) }
            ,{ path: 'upload-cases-party-above-60', loadComponent: () => import('./upload-cases-with-party-above-60/upload-cases-with-party-above-60.component').then(c => c.UploadCasesWithPartyAbove60Component) }
            ,{ path: 'upload-ex-parte-injunction-granted', loadComponent: () => import('./upload-ex-parte-injunction-granted-cases/upload-ex-parte-injunction-granted-cases.component').then(c => c.UploadExParteInjunctionGrantedCasesComponent) }
            ,{ path: 'upload-cases-vulnerable-groups', loadComponent: () => import('./upload-cases-vulnerable-groups/upload-cases-vulnerable-groups.component').then(c => c.UploadCasesVulnerableGroupsComponent) }
            // { path: 'payscale', loadChildren: () => import('./rec-admin/masters/payscale/payscale-routing.module').then(r => r.payscaleRoutes) },
        ]
    }
]