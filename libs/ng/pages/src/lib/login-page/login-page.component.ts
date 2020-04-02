import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nx-solsig-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(params) {
    console.log(params);
  }

}
