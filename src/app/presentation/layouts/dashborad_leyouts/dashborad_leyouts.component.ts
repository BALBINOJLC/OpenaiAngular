import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarMenuItemComponent } from '../../components/sidebarMenuItem/sidebarMenuItem.component';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-dashborad-leyouts',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarMenuItemComponent
  ],
  templateUrl: './dashborad_leyouts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboradLeyoutsComponent {
  public routes = routes[0].children?.filter((route) => route.data);
}
