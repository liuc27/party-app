import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

let headers = new Headers({'Access-Control-Allow-Origin':'*'});
headers.append('Content-Type', 'application/x-www-form-urlencoded');
let options = new RequestOptions({ headers: headers, method: "post" });

/*
  Generated class for the SettingsLoginLocal provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SettingsUserinfo {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  load(provider,token) {
    console.log(provider);
    console.log(token);
    let body = "provider=" + provider + "&token=" + token ;

    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.

      this.http.post('http://ec2-54-238-168-110.ap-northeast-1.compute.amazonaws.com/app/oauth',
      body,options)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          resolve(data);
        });
    });


  }
}
