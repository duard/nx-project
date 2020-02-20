import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgUiMaterialModule } from '@nx-solsig/ng/ui-material';

// import { NgPagesModule } from "@nx-solsig/ng/pages";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgUiMaterialModule,
    // NgPagesModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabled' })
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
