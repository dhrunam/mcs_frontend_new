import { Component } from '@angular/core';
import { SidebarMenusComponent } from '../sidebar-menus/sidebar-menus.component';
import { AuthDataService } from '../../user-data.services';
import * as AOS from 'aos';
import { SideBarDistrictMenusComponent } from '../side-bar-district-menus/side-bar-district-menus.component';
import { LocalStorageService } from '../../../../auth/local-storage/local-storage.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarMenusComponent,SideBarDistrictMenusComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  userName: any;

  constructor(public authDataService: AuthDataService, public localStorageService: LocalStorageService) {

  }

  ngOnInit() {
    AOS.init()
    this.userName = this.localStorageService.getUserName();
    console.log(this.userName)
  }

}
