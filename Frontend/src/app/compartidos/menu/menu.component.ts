import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importar Animations
import { MatButtonModule } from '@angular/material/button'; // Importar Material Button
import { MatMenuModule } from '@angular/material/menu'; // Importar Material Menu
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    RouterLink,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
   MatIconModule,
        
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  // Método para abrir el menú cuando el mouse entra
  openMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }

  // Método para cerrar el menú cuando el mouse sale
  closeMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.closeMenu();
  }
}
