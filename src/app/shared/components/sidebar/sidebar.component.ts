import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  public open: boolean = true;

  public menuItems: MenuItem[] = [
    { title: "Home", icon: "home", route: '/super-dashboard' },
    { title: "Subs", icon: "store", submenus: [ { title: 'submenu1', route: '/ruta' }, { title: 'submmenu2', route: '/ruta2' }, { title: 'submmenu2', route: '/ruta2' }, { title: 'submmenu2', route: '/ruta2' }, { title: 'submmenu2', route: '/ruta2' } ] },
    { title: "Direcciones", icon: "layers", route: '/super-dashboard/directions' },
    { title: "Departamentos", icon: "layers", route: '/super-dashboard/departments' },
  ];

  setOpen(){
    this.open = !this.open;
  }


  showSubmenu: { [key: string]: boolean } = {};

  toggleSubmenu(item: MenuItem) {
    const title = item.title;
    this.showSubmenu[title] = !this.showSubmenu[title];
  }
  
}
