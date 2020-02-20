import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NgPagesModule } from "@nx-solsig/ng/pages";

// import { AboutComponent } from './modules/general/about/about.component';
// import { ContactComponent } from './modules/general/contact/contact.component';
// import { HomeComponent } from './modules/general/home/home.component';
// import { SigninComponent } from './modules/general/signin/signin.component';
// import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, },
  // { path: 'contact', component: ContactComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'signin', component: SigninComponent },
  {
    path: 'entrar',
    loadChildren: () =>
      import('@nx-solsig/ng/pages').then(module => module.LoginModule)
  },
  {
    path: 'lazy',
    loadChildren: async () => {
      const { NgPagesModule } = await import('@nx-solsig/ng/pages');
      return NgPagesModule;
    }
  },
  {
    path: 'login',
    loadChildren: () => import('@nx-solsig/ng/pages')
      .then(mod => mod.NgPagesModule)
  },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled'})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
