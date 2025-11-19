import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  imports: [],
  templateUrl: './component2.html',
  styleUrl: './component2.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Component2 {

}
