import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'nx-solsig-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XyzComponent implements OnInit {
  variavelXYZ = 'Goiaba';

  variavel : Observable<any>;
  // https://christiankohler.net/reactive-angular-with-ngrx-component
  count = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetch();

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

  async fetch() {
    this.variavel = await this.http.get<any>('/api');
    const value = <any>await this.http.get<any>('/api');

    value.subscribe(data => {
      this.variavelXYZ = data;
      console.log('=> ', this.variavelXYZ);
    });

    console.log('=> ', this.variavelXYZ, value);

    this.variavel.subscribe(data => {
      this.variavelXYZ = data;
      console.log('=> ', this.variavelXYZ);
    });

    this.http.get<any>('/api').toPromise().then(data => {
      this.variavelXYZ = data;
      console.log('Promise resolved.')
    });
    console.log('I will not wait until promise is resolved..', this.variavelXYZ);

     await this.http.get<any>('/api').toPromise().then(data => {
      this.variavelXYZ = data;
      console.log('acabou', data);
    });

    console.log('No issues, I will wait until promise is resolved..', this.variavelXYZ);
    // this.variavelXYZ = 'Bosta';
    console.log('=> ', this.variavelXYZ, value);
  }
}
