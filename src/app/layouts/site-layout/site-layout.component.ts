import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@app/shared';

@Component({
  standalone: true,
  imports: [SharedModule],
  templateUrl: './site-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteLayoutComponent {}
