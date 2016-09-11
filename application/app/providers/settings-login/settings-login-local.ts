import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SettingsLoginLocal provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SettingsLoginLocal {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  load(username,password) {
    if (this.data) {
      // already loaded data
      console.log(username);
      console.log(password);
      return Promise.resolve(this.data);
    }

    var formData = new FormData();


    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.

      this.http.post("http://ec2-54-238-168-110.ap-northeast-1.compute.amazonaws.com:8080/api/login",
      JSON.stringify({
            "username": username,
            "password": password
      })
      )
        .map(res => res)
        .subscribe(data => {
          console.log(data);
        });
    });
  }
}
