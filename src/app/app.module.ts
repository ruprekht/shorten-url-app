import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UrlProfileModule } from './url-profile';
import { UrlsListModule } from './urls-list';
import { AppRoutingModule } from './app-routing.module';
import { ShortenUrlService } from './services';
import { RedirectToUrlModule } from './redirect-to-url';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UrlProfileModule,
    UrlsListModule,
    RedirectToUrlModule,
    AppRoutingModule
  ],
  providers: [ShortenUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
