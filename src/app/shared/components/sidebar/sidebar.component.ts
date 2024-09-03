import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{

  isLoggedIn = false;
  emitterService: any;
  fullName: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.authenticationService.checkToken()
        .subscribe((userFullName) => {
            console.log(userFullName['fullName']);
            this.fullName =  userFullName['fullName'];
        });
  }

  public open: boolean = true;

  public menuItems: MenuItem[] = [
    { title: "Home", icon: "home", route: '/super-dashboard' },
    { title: "Gerentes", icon: "people-roof", route: '/super-dashboard/managers' },
    { title: "Subs", icon: "store", submenus: [ { title: 'submenu1', route: '/ruta' }, { title: 'submmenu2', route: '/ruta2' }, { title: 'submmenu2', route: '/ruta2' }, { title: 'submmenu2', route: '/ruta2' }, { title: 'submmenu2', route: '/ruta2' } ] },
    { title: "Direcciones", icon: "location_on", route: '/super-dashboard/directions' },
    { title: "Departamentos", icon: "layers", route: '/super-dashboard/departments' },
    { title: "Empresas", icon: "business", route: '/super-dashboard/enterprises' },
    { title: "CEOs", icon: "groups", route: '/super-dashboard/ceos' },
    { title: "Áreas", icon: "corporate_fare", route: '/super-dashboard/areas'}
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
