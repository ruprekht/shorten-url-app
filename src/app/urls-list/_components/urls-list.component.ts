import { Component, OnInit } from '@angular/core';
import { ShortenUrlService } from '../../services';
import { ShortenUrl } from '../../models';
import { Router } from '@angular/router';

@Component({
    templateUrl: './urls-list.component.html',
    styleUrls: ['../_assets/urls-list.component.scss']
})
export class UrlsListComponent implements OnInit {
    public urls: ShortenUrl[];

    constructor(private _urlService: ShortenUrlService, private _router: Router) { }

    ngOnInit(): void {
        this._urlService.getUrls()
            .subscribe(res => this.urls = res);
    }

    public onSelect(id: string) {
        this._router.navigate(['shortenurl', id]);
    }

    public onCreate() {
        this._router.navigate(['shortenurl']);
      }
}
