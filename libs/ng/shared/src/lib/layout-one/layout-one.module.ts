import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgSharedModule } from '../ng-shared.module';
import { FooterComponent } from './footer/footer.component';
import { LayoutOneComponent } from './layout-one.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    LayoutOneComponent,
    FooterComponent,
    NavbarComponent,
    TopbarComponent,
  ],
  exports:[LayoutOneComponent],
  imports: [CommonModule, NgSharedModule],
})
export class LayoutOneModule {}
