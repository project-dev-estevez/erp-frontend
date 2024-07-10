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
    // { title: "Contratistas", icon: "people" },
    { title: "Almacén", icon: "store", route: '/dashboard/warehouse'},
    { title: "Multi", icon: "store", submenus: [ { title: 'submenu1', route: '/ruta' }, { title: 'submmenu2', route: '/ruta2' } ] }
    // { title: "Reportes Almacén", icon: "assessment" },
    // { title: "Solicitud Compra", icon: "shopping_cart" },
    // { title: "Solicitud Almacén", icon: "inventory" },
    // { title: "Pedidos", icon: "shopping_bag" },
    // { title: "Solicitudes", icon: "assignment" },
    // { title: "Devoluciones", icon: "undo" },
    // { title: "Solicitud Caja Chica", icon: "attach_money" },
    // { title: "Explosión Insumos", icon: "science" },
    // { title: "Justificación RH", icon: "work" },
    // { title: "Soporte", icon: "support" },
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
