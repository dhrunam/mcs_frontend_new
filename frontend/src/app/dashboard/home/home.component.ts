import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit(): void{
    AOS.init();
  }
}
