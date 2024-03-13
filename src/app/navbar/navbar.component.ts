import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  appRoutes : Array<any> =[
    {path:"products", text:"Products List"},
    {path:"products/add", text:"New Product"},
  ]
  currentRoute :any =this.appRoutes[0]
  setCurrentRoute(appRoute: any) {
    this.currentRoute=appRoute
  }
}
