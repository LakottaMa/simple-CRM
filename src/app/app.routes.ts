import { Routes } from '@angular/router';
import { DashboardComponent } from '../app/services/components/dashboard/dashboard.component';
import { UserComponent } from '../app/services/components/user/user.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent },
    {path: 'dashboard', component: DashboardComponent },
    {path: 'user', component: UserComponent },
];