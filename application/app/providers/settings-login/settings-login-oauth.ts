import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

let headers = new Headers();
headers.append('Access-Control-Allow-Origin', '*');
//let options = new RequestOptions({ headers: headers });


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
          + "&redirect_uri=http://localhost:8101/build/pages/settings/oauth/callback/google.html"
          + "response_type=token";
    }





    return new Promise(resolve => {

    this.http.get(url,{ headers: headers })
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        console.log(data);
        this.data = data.results;
        resolve(this.data);
      });

/*
 this.jsonp.get(url)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.results;
        console.log(data);
        resolve(this.data);
      });
*/

    });
  }
}
