import { Component } from '@angular/core';
import { NavItem } from '../../interfaces/nav-item';

@Component({
  selector: 'gb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navItems: NavItem[] = [
    { text: 'INICIO', url: '#' },
    { text: 'RECETAS', url: '#' },
    { text: 'MOMENTO', url: '#' },
    { text: 'CONTACTO', url: '#' },
  ];
}
