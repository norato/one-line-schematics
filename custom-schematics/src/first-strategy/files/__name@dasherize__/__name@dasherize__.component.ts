import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-<%= dasherize(name)%>',
  templateUrl: './<%= dasherize(name)%>.component.html',
  styleUrls: ['./<%= dasherize(name)%>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name)%>Component implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject();
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
