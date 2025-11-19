import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-component1',
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './component1.html',
  styleUrl: './component1.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Component1 {

}
