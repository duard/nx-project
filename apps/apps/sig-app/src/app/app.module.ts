import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@env/environment';
import { NgCoreModule } from '@nx-solsig/ng/core';
import { LayoutOneModule, NgSharedModule } from '@nx-solsig/ng/shared';
import { NgUiMaterialModule } from '@nx-solsig/ng/ui-material';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgMaterialMultilevelMenuModule, // Import here
    BrowserAnimationsModule,
    NgCoreModule.forRoot(environment),
    NgSharedModule,
    AppRoutingModule,
    NgUiMaterialModule,
    PerfectScrollbarModule,
    ModalModule.forRoot(),
    LayoutOneModule
    // ours
    // material
    // MatToolbarModule,
    // MatButtonModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
