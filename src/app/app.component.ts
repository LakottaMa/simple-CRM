import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { UserComponent } from './services/components/user/user.component';
import { DashboardComponent } from './services/components/dashboard/dashboard.component';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatNativeDateModule, UserComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-CRM';
}
