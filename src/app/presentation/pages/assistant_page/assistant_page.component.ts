import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-assistant-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './assistant_page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistantPageComponent { }
