import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgSharedMaterialModule } from "@nx-solsig/ng/shared-material";
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [CommonModule, NgSharedMaterialModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginPageComponent,
        data: { title: 'anms.menu.login' }
      },
      {
        path: 'lazy',
        component: LoginPageComponent,
        data: { title: 'anms.menu.login' }
      }
    ])
  ],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
})
export class NgPagesModule {}
