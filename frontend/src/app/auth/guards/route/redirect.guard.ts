// src/app/guards/route/redirect.guard.ts
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { LocalStorageService } from '../../local-storage/local-storage.service';

export const redirectGuard: CanActivateFn = () => {
  const localStorageService = inject(LocalStorageService);
  const router = inject(Router)
  if(!localStorageService.getToken()){
    return true;
  }
  else{
    router.navigateByUrl('/dashboard');
    return false;
  }
};
