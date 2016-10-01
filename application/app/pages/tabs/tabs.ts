import {Component} from '@angular/core'
import {Events, NavController} from 'ionic-angular';
import {ProductPage} from '../product/product';
import {ShopPage} from '../shop/shop';
import {SettingsPage} from '../settings/settings';
import {Oauth} from '../settings/oauth/oauth';
import myGlobals = require('../../globals');
//import {Location} from '@angular2/router';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})

export class TabsPage {
  token: any;
  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  public show;
  private showTabs;

  constructor(
  private nav:NavController,
  private events: Events
  ) {

  if (window.location.hash.match(/^#access_token/) && ! myGlobals.token) {
            this.parseToken();
            this.nav.push(Oauth);
        }else if (myGlobals.token) {
            console.log('found token: ', myGlobals.token);
  }



    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = ProductPage;
    this.tab2Root = ShopPage;
    this.tab3Root = SettingsPage;

    this.showTabs=true;
    this.listenToShowTabsEvents();
  }

  listenToShowTabsEvents() {
    this.events.subscribe('hideTabs', () => {
      this.showTabs = false;
    });

    this.events.subscribe('showTabs', () => {
      this.showTabs = true;
    });
}
parseToken() {
        var parmStr = location.hash.substring(1); // strip leading hash
        var parms = parmStr.split('&');
        for (var i in parms) {
            var kv = parms[i].split('=');
            if(kv[0] == "access_token"){
              myGlobals.token = kv[1];
            }
        }
  }
}
