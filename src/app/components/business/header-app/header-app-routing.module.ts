import { Routes, RouterModule } from '@angular/router';

import { HeaderAppComponent } from "./header-app.component";

export const routes: Routes = [
    {
        path: '**',
        component: HeaderAppComponent
    },
];

export const HeaderAppRoutes = RouterModule.forRoot(routes);