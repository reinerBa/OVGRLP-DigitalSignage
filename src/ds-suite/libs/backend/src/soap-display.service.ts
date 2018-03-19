import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { DisplayService } from '@ds-suite/core';
import { Display, DisplayStatus, AppConfig } from '@ds-suite/model';

@Injectable()
export class SoapDisplayService implements DisplayService {
  constructor(private http: HttpClient, private config: AppConfig) { }

  getDisplays(): Observable<Display[]> {
    return this.http.get<Display[]>(`${this.config.webApiUrl}/settings/displays`);
  }

  getDisplay(name: string): Observable<Display> {
    return this.http.get<Display>(`${this.config.webApiUrl}/settings/displays/${name}`).map(resp => {
      //HACK: das geht sicherlich besser
      if(resp instanceof Array) {
        return resp[0];
      } else {
        return resp;
      }
    });
  }

  getDisplayStatus(display: Display): Observable<DisplayStatus> {
    return this.http.get<DisplayStatus>(`${this.config.webApiUrl}/settings/displays/${display.name}/status`);
  }
}
