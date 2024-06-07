import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  public open: boolean = true;

  public menuItems = [
    { title: "Home", icon: "home" },
    { title: "Personal", icon: "person" },
    { title: "Contratistas", icon: "people" },
    { title: "Almacén", icon: "store" },
    { title: "Reportes Almacén", icon: "assessment" },
    { title: "Solicitud Compra", icon: "shopping_cart" },
    { title: "Solicitud Almacén", icon: "inventory" },
    { title: "Pedidos", icon: "shopping_bag" },
    { title: "Solicitudes", icon: "assignment" },
    { title: "Devoluciones", icon: "undo" },
    { title: "Solicitud Caja Chica", icon: "attach_money" },
    { title: "Explosión Insumos", icon: "science" },
    { title: "Justificación RH", icon: "work" },
    { title: "Soporte", icon: "support" },
  ];
  
  


  setOpen(){
    this.open = !this.open;
  }
  
}
