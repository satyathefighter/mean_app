import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {'aria-hidden': 'true'},
})
export class ThemePickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
