import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  imports: [CommonModule],
  declarations: [XyzComponent],
  exports: [XyzComponent],
})
export class NgUiMaterialModule {}
