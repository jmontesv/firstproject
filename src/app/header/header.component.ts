import { Component, OnInit, Renderer2, ViewEncapsulation, HostBinding } from '@angular/core';
import { AuthService } from '../authservice.service';
@Component({
    selector: '<app-header>',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    showSubmenu: boolean;
    title: string;

    constructor( private r2: Renderer2, private auth: AuthService) {
           this.r2.listen('body', 'click' , (event) => {
                if (event && event.target && !(<HTMLElement>event.target).getAttribute('data-toggle')) {
                    this.showSubmenu = false;
                }
            });
            this.title = 'Bienvenido';
    }
    ngOnInit() {}

    showSubMenu() {
        if (!this.showSubmenu) {
            this.showSubmenu = true;
        } else {
            this.showSubmenu = false;
        }
    }

    logIn() {
        this.auth.login();
      }

      logOut() {
        this.auth.logout();
      }
}

