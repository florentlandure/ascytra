import { Component, OnInit, HostListener } from '@angular/core';
import { IMenuItem } from '../../models';
import { MENU_ITEMS_LIST } from '../../config';

@Component({
  selector: 'ascytra-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuItemsList: IMenuItem[] = MENU_ITEMS_LIST;
  isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {
    this.listenResize();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  listenResize(): void {
    window.addEventListener('resize', (event: UIEvent) => {
      if (this.isMenuOpen && window.innerWidth >= 1024) {
        this.isMenuOpen = false;
      }
    });
  }
}
