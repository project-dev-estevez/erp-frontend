import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  public open: boolean = true;

  public menuItems = [
    { title: "Home", icon: "home", route: '/super-dashboard' },
    { title: "Direcciones", icon: "layers", route: '/super-dashboard/directions' },
    { title: "Departamentos", icon: "layers", route: '/super-dashboard/departments' },
  ];

  setOpen(){
    this.open = !this.open;
  }
  
}
