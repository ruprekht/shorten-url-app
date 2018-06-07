import { ShortenUrl } from '../../models';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShortenUrlService } from '../../services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './url-profile.component.html',
    styleUrls: ['../_assets/url-profile.component.scss']
})
export class UrlProfileComponent {

    public get url(): ShortenUrl {
        if (!this._url) {
            this._url = new ShortenUrl();
        }
        return this._url;
    }

    private _urlId: string;
    private _url: ShortenUrl;
    private _loaded = false;
    private _deletable: boolean;
    private _shortcutInvalid: boolean;
    private _urlInvalid: boolean;
    private _validationExceptionMessage: string;

    private readonly _urlEmptyMessage = 'You must specify the URL.';
    private readonly _shortcutEmptyMessage = 'You must specify the shortcut.';

    public urlForm: FormGroup;

    constructor(private _urlService: ShortenUrlService,
                private _router: Router,
                private _route: ActivatedRoute,
                private _fb: FormBuilder) {
        this._route.params.subscribe(async params => this.onRouteParamsChanged(params));
        this.urlForm = this._fb.group({
            'shortcut': [this.url.shortcut, Validators.required],
            'url': [this.url.url, Validators.required]
          });
    }

    public onSave(model) {
        this._url.shortcut = model.shortcut;
        this._url.url = model.url;
        this.cleanupValidation();
        if (this._urlId) {
            this._urlService.updateUrl(this._url)
                .subscribe(res => {
                    this.goBack();
                }, err => this.handleValidationException(err));
        } else {
            this._urlService.createUrl(this._url)
                .subscribe(res => {
                    this.goBack();
                }, err => this.handleValidationException(err));
        }
    }

    public onDelete() {
        this._urlService.deleteUrl(this._urlId)
            .subscribe(deleted => {
                this.goBack();
            });
    }

    private cleanupValidation() {
        this._urlInvalid = false;
        this._shortcutInvalid = false;
        this._validationExceptionMessage = '';
    }

    private handleValidationException(err: any) {
        this._validationExceptionMessage = JSON.parse(err._body).ExceptionMessage;
        if (this._validationExceptionMessage.indexOf('Shortcut') > -1) {
            this._shortcutInvalid = true;
        } else if (this._validationExceptionMessage.indexOf('Url') > -1) {
            this._urlInvalid = true;
        }
    }

    private onRouteParamsChanged(params: any) {
        if (params.id) {
            this._deletable = true;
            this._urlId = params.id;
            this._urlService.getUrl(this._urlId)
            .subscribe(res => {
                this._url = res;
                this._loaded = true;
                if (!this._url) {
                    this.goBack();
                }
            });
        } else {
            this._loaded = true;
        }
    }

    private goBack() {
        this._router.navigate(['']);
    }
}
