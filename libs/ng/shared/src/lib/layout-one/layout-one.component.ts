import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'nx-solsig-layout-one',
  templateUrl: './layout-one.component.html',
  styleUrls: ['./layout-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutOneComponent implements OnInit, AfterViewInit {
  showMobileMenu = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
