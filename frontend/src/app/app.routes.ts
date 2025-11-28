import { Routes } from '@angular/router';
import { authGuard } from './auth/guards/route/auth.guard';
import { redirectGuard } from './auth/guards/route/redirect.guard';

export const routes: Routes = [
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.routes').then(r => r.routes) },
    { path: '', loadComponent: () => import('./auth/login/login.component').then(c=> c.LoginComponent), canActivate: [ redirectGuard ] },
    {path:'monthly-disposed-transferred-case',loadComponent:()=>import('./dashboard/monthly-disposed-transferred-case/monthly-disposed-transferred-case.component').then(c=>c.MonthlyDisposedTransferredCaseComponent)},
    {path:'monthly-pending-case',loadComponent:()=>import('./dashboard/monthly-pending-cases/monthly-pending-cases.component').then(c=>c.MonthlyPendingCasesComponent)},
    {path:'monthly-court-fee',loadComponent:()=>import('./dashboard/monthly-court-fees/monthly-court-fees.component').then(c=> c.MonthlyCourtFeesComponent)}
];
