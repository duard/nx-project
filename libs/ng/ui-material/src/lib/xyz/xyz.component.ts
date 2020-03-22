import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nx-solsig-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XyzComponent implements OnInit {
  variavelXYZ = 'Goiaba';

  constructor() { }

  ngOnInit(): void {
    if (this.variavelXYZ === 'Goiaba') {
      console.log('3===', 'goiabou 3');
    }

    if (this.variavelXYZ == 'Goiaba') {
      console.log('2==', 'goiabou 2');
    }

    console.log('xyz', 'Debugando', this.variavelXYZ);
  }

}
