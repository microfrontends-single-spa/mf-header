import { NgModule } from '@angular/core';
import { HeaderAppRoutes } from './header-app-routing.module';

import { HeaderAppComponent } from './header-app.component';
import { LanguageComponent } from "./language/language.component";
import { NotificationComponent } from "./notification/notification.component";
import { ProfileUserComponent } from "./profile-user/profile-user.component";

@NgModule({
  declarations: [
    HeaderAppComponent,
    LanguageComponent,
    NotificationComponent,
    ProfileUserComponent
  ],
  imports: [
    HeaderAppRoutes    
  ],
  providers: [],
  bootstrap: []
})
export class HeaderAppModule { }
