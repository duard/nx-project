import { Component } from '@angular/core';

@Component({
  selector: 'nx-solsig-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apps-sig-app';

  constructor() {
    console.log('ANGULAR VIA VSCODE', 'CONTAINER');
  }
}
