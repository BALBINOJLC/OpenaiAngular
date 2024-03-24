import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pro-cons-stream-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './proConsStreamPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProConsStreamPageComponent { }
