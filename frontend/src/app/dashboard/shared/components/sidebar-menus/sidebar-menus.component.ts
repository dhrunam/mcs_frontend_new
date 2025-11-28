import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menus',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar-menus.component.html',
  styleUrl: './sidebar-menus.component.css'
})
export class SidebarMenusComponent {
  toggleKey: string = '';
  subMenuToggle: boolean = false;

  constructor(private renderer: Renderer2){}
  onToggle(elem1:any, elem2: any, key:string){
    if(this.toggleKey != key){
      this.toggleKey = key;
      this.subMenuToggle = false;
    }
    this.subMenuToggle = !this.subMenuToggle
    if(this.subMenuToggle){
      this.renderer.addClass(elem1, 'open');
      this.renderer.addClass(elem2, 'active');
    }
    else{
      this.renderer.removeClass(elem1, 'open');
      this.renderer.removeClass(elem2, 'active');
    }
  }
  onToggleKey(key:string){
    this.toggleKey = key;
  }




}
