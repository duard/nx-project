import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nx-solsig-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Login', 'Debugando');
  }

}
