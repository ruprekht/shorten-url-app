import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { ShortenUrl } from '../models';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ShortenUrlService {
    public result: any;
    private _baseUrl: string;

    constructor(private _http: Http) {
        this._baseUrl = environment.serverUri + 'api/urls';
    }

    public getUrls() {
        return this._http.get(this._baseUrl)
            .map(result => this.result = result.json())
            .catch((e: any) => Observable.throw(e));
    }

    public getUrl(value: string) {
        return this._http.get(`${this._baseUrl}/${value}`)
            .map(result => this.result = result.json())
            .catch((e: any) => Observable.throw(e));
    }

    public updateUrl(url: ShortenUrl) {
        return this._http.put(`${this._baseUrl}/${url.id}`, url)
            .map(result => this.result = result)
            .catch((e: any) => Observable.throw(e));
    }

    public createUrl(url: ShortenUrl) {
        return this._http.post(this._baseUrl, url)
            .map(result => this.result = result.json())
            .catch((e: any) => Observable.throw(e));
    }

    public deleteUrl(id: string) {
        return this._http.delete(`${this._baseUrl}/${id}`)
            .map(result => this.result = result)
            .catch((e: any) => Observable.throw(e));
    }
}
