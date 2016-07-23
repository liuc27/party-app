import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductListsGetSelectedProductLists provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class getSelectedProductLists {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  load(k) {
    if (this.data) {
      // already loaded data
      console.log(k.data.product);
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
    console.log(k.data.product);
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('https://randomuser.me/api/?results=10')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data.results;
          resolve(this.data);
        });
    });
  }
}
