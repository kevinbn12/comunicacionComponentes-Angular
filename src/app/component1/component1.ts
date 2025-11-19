import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  imports: [],
  templateUrl: './component1.html',
  styleUrl: './component1.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Component1 {

}
