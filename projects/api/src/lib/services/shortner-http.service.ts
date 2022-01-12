import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpRequestModel } from '../model/http-request-model';
import { ConfigurationService } from './configuration.service';
import { Shortner } from 'types';

@Injectable({ providedIn: 'root' })
export class ShortnerHttpService extends BaseHttpService {

  constructor(
    public http: HttpClient,
    private config: ConfigurationService) {
    super(http);
  }

  getLongUrl$(shortUrl): Observable<Shortner> {
    return this.get$({
      url: `${this.config.ips.servicePath}shortner/`,
      action: 'GetLongUrl',
      params: {shortUrl},
      body: {},
    } as HttpRequestModel)
  }

  addUrl$(longUrl:string): Observable<string> {
    
    return this.post$({
      url: `${this.config.ips.servicePath}shortner/`,
      action: 'AddUrl',
      params: { longUrl },
      body: {},
    } as HttpRequestModel)
  }

}
