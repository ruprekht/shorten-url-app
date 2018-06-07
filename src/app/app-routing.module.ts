import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlsListComponent } from './urls-list';
import { UrlProfileComponent } from './url-profile';
import { RedirectToUrlComponent } from './redirect-to-url';

const routes: Routes = [
  {
    path: '',
    component: UrlsListComponent
  },
  {
    path: 'shortenurl/:id',
    component: UrlProfileComponent
  },
  {
    path: 'shortenurl',
    component: UrlProfileComponent
  },
  {
    path: ':shortcut',
    component: RedirectToUrlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
