import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-image-generations-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './imageGenerationsPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageGenerationsPageComponent { }
