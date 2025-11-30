import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as AOS from 'aos';
import { AuthService } from '../auth.service';
import { PromptComponent } from '../../shared/prompt/prompt/prompt.component';
import { LocalStorageService } from '../local-storage/local-storage.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, PromptComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  message: string = '';
  invalidCredentials: boolean = false;
  showLoader: boolean = false;
  constructor(private routes: ActivatedRoute, private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    AOS.init();
    this.routes.queryParams.subscribe({
      next: (data: Params) => {
        console.log(data);
      }
    })
  }
  onChangeHandle() {
    this.invalidCredentials = false;
  }
  onLogin(data: NgForm, event: Event) {
    if (!data.valid) {
      data.control.markAllAsTouched();
    }
    else{
      this.message = '';
      this.showLoader = true;
      const fd = new FormData();
      fd.append('username', data.value.username);
      fd.append('password', data.value.password);
      fd.append('client', 'web');
      this.authService.login(fd).subscribe({
        next: (result: any) => {
          console.log("login success:", result);
          console.log("token:", result.token);
          window.localStorage.setItem('username', data.value.username);
          window.localStorage.setItem('token', result.token);
          const redirectRoute = data.value.username === 'hcs_admin'
            ? '/dashboard/monthly-statement-reports'
            : '/dashboard/submit-monthly-statement';
          this.router.navigate([redirectRoute]);
          data.reset();
          this.showLoader = false;
        },
        error: err => {
          console.log("login error:", err);
          this.showLoader = false;
          if(err.status == 401)
            this.message = 'Invalid Credentials';
          else
            this.message = 'An unexpected error occured.';
        }
      });
    }
  }
}
