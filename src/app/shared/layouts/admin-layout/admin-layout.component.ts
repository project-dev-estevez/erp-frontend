import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

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
