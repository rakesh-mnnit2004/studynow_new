import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Navigation } from './navigation/navigation';
 import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CommonModule, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'studnowgui';
  routeURL:string ='';
  constructor(private router: Router){
  
  }
   ngOnInit(): void{

    this.routeURL =this.router.url.startsWith('/')? this.router.url.substring(1): this.router.url;
  }
}
