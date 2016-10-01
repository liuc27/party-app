import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

let headers = new Headers({'Access-Control-Allow-Origin':'*'});
headers.append('Content-Type', 'application/x-www-form-urlencoded');
let options = new RequestOptions({ headers: headers, method: "get" });


/*
  Generated class for the SettingsLoginLocal provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SettingsLoginOauth {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  load(oauthName) {
    let url = null;
    if (oauthName === "facebook" ) {
      url = "https://www.facebook.com/v2.0/dialog/oauth?client_id=149120325435621"
          + "&redirect_uri=http://localhost:8101/build/pages/settings/oauth/callback/facebook.html"
          + "response_type=token";
    }else if (oauthName === "google" ){
      url = "https://accounts.google.com/o/oauth2/auth?scope=email%20profile"
          + "&client_id=574220187766-87kr3bmj99p9ucn65alioqiuaaj7v0jc.apps.googleusercontent.com"
          + "&redirect_uri=http://localhost:8101"
          + "&response_type=token";
    }

    window.open(url,'_self');


  }
}
