import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgSharedModule } from '@nx-solsig/ng/shared';

import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  imports: [CommonModule,     NgSharedModule  ],
  declarations: [XyzComponent],
  exports: [XyzComponent],
})
export class NgUiMaterialModule {}
