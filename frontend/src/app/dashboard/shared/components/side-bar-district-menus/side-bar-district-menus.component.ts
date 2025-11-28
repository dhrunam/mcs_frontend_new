import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-bar-district-menus',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './side-bar-district-menus.component.html',
  styleUrl: './side-bar-district-menus.component.css'
})
export class SideBarDistrictMenusComponent {
  toggleKey: string = '';
  subMenuToggle: boolean = false;

  constructor(private renderer: Renderer2) { }
  onToggle(elem1: any, elem2: any, key: string) {
    if (this.toggleKey != key)
    {
      this.toggleKey = key;
      this.subMenuToggle = false;
    }
    this.subMenuToggle = !this.subMenuToggle
    if (this.subMenuToggle)
    {
      this.renderer.addClass(elem1, 'open');
      this.renderer.addClass(elem2, 'active');
    }
    else
    {
      this.renderer.removeClass(elem1, 'open');
      this.renderer.removeClass(elem2, 'active');
    }
  }
  onToggleKey(key: string) {
    this.toggleKey = key;
  }
}
