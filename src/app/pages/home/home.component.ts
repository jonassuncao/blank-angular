import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@app/shared';

@Component({
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
