import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  public open: boolean = true;

  public menuItems = [
    { title: "Dashboard" },
    { title: "Pages" },
    { title: "Media", spacing: true },
    {
      title: "Projects",
      submenu: true,
      submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 2" }, { title: "Submenu 3" }],
    },
    { title: "Analytics" },
    { title: "Profile", spacing: true },
    { title: "Setting" },
    { title: "Logout" },
  ];


  setOpen(){
    this.open = !this.open;
  }
  
}
