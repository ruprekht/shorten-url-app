import { ShortenUrl } from './../../models';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShortenUrlService } from '../../services';

@Component({
    template: ''
})
export class RedirectToUrlComponent {
    private _shortcut: string;

    constructor(private _urlService: ShortenUrlService,
                private _router: Router,
                private _route: ActivatedRoute) {
        this._route.params.subscribe(async params => this.onRouteParamsChanged(params));
    }

    private onRouteParamsChanged(params) {
        if (params.shortcut) {
            this._shortcut = params.shortcut;
            this._urlService.getUrl(this._shortcut)
                .subscribe(res => {
                    if (res && res.Url) {
                        window.location.href =  res.Url;
                    } else {
                        this.goBack();
                    }
                });
        } else {
            this.goBack();
        }
    }

    private goBack() {
        this._router.navigate(['']);
    }
}
