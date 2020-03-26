import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'solsig-test-vertical',
  templateUrl: './test-vertical.component.html',
  styleUrls: ['./test-vertical.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestVerticalComponent implements OnInit {
  @Input() isAuthenticated = null;
  @Input() thisOrg = null;
  @Input() usuario = null;

  constructor() {}

  ngOnInit() {}
}
