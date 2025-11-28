import { Component } from '@angular/core';
import { SidebarMenusComponent } from '../sidebar-menus/sidebar-menus.component';
import { AuthService } from '../../../../auth/auth.service';
import { LocalStorageService } from '../../../../auth/local-storage/local-storage.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidebarMenusComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username:string = '';
  constructor(private authService: AuthService, private localStorageService: LocalStorageService){
    this.username = this.localStorageService.getUserName();
  }
  onLogout(){
    this.authService.logout();
  }
}
