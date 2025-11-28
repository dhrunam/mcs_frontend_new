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
            {path:'monthly-disposed-transferred-case',loadComponent:()=>import('./monthly-disposed-transferred-case/monthly-disposed-transferred-case.component').then(c=>c.MonthlyDisposedTransferredCaseComponent)}
            // { path: 'payscale', loadChildren: () => import('./rec-admin/masters/payscale/payscale-routing.module').then(r => r.payscaleRoutes) },
        ]
    }
]