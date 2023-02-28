import { Component } from '@angular/core';

import { APP_PREFIX } from "../../../constants/app.constant";

@Component({
  selector: 'header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
})
export class HeaderAppComponent {
  APP_PREFIX: string = APP_PREFIX;

  constructor() {
  }

  openMenu() {
    window.dispatchEvent(
      new CustomEvent('evt-open-panel-menu', {
        detail: {
          isOpenMenu: false,
        },
      })
    );
  }
}