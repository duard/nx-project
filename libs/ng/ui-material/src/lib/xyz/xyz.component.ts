import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nx-solsig-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XyzComponent implements OnInit {
  variavelXYZ = 'Goiaba';
  // https://christiankohler.net/reactive-angular-with-ngrx-component
  count = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.variavelXYZ === 'Goiaba') {
      console.log('3===', 'goiabou 3');
    }

    console.log('xyz', 'Debugando', this.variavelXYZ);
  }

  // triggers change detection
  increment() {
    this.count = this.count + 1;
  }
  // also triggers change detection
  noEffect() {}
}
