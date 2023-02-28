import { Component } from "@angular/core";

import { APP_PREFIX } from "../../../../constants/app.constant";

@Component({
    selector: 'notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
    APP_PREFIX: string = APP_PREFIX;
}