import { Component, Input } from '@angular/core';
import { SubmenuItem } from '../../../interfaces/submenu-item';

@Component({
  selector: 'app-multilevel-sidenav',
  templateUrl: './multilevel-sidenav.component.html',
  styleUrl: './multilevel-sidenav.component.scss'
})
export class MultilevelSidenavComponent {

  @Input() submenuItems: SubmenuItem[] = [];

}
