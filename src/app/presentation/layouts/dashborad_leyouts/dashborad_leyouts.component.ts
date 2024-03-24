import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashborad-leyouts',
  standalone: true,
  imports: [ 
    CommonModule,
  ],
  templateUrl: './dashborad_leyouts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboradLeyoutsComponent { }
