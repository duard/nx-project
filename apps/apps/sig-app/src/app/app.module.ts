import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@env/environment';
import { NgCoreModule } from '@nx-solsig/ng/core';
import { NgUiMaterialModule } from '@nx-solsig/ng/ui-material';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSharedModule } from '@nx-solsig/ng/shared';

// import { NgSharedModule } from '@nx-solsig/ng/shared';
// import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
// import { AppRoutingModule } from './routes/app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgMaterialMultilevelMenuModule, // Import here
    BrowserAnimationsModule,
    NgCoreModule.forRoot(environment),
    NgSharedModule,
    AppRoutingModule,
    NgUiMaterialModule
    // ours
    // material
    // MatToolbarModule,
    // MatButtonModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
