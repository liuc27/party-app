/**
 * Created by zhengliyi on 9/11/16.
 */
import {Component, ViewChild, ElementRef} from '@angular/core';
import {Page, App, Events, NavController, NavParams, Popover, AlertController} from 'ionic-angular';
//import {SettingsRegister} from '../../../providers/settings-login/settings-register';
import {SettingsPage} from '../settings';
import {Http} from '@angular/http';
import myGlobals = require('../../../globals');

@Component({
    templateUrl: 'build/pages/settings/oauth/oauth.html'
    //providers: [SettingsRegister]
})
export class Oauth {
  data: any;
  provider: String;
  token: String;


  constructor(private nav:NavController,
              private params:NavParams,
              private events: Events,
              private http:Http,
              private alertCtrl: AlertController){

              console.log("aaa");
              this.provider = window.localStorage.getItem("provider");
              this.token = myGlobals.token;
              console.log(this.provider);
              console.log(this.token);
  }

    onPageWillEnter() {
        this.events.publish('showTabs');
    }

    showAlert(message) {
      let alert = this.alertCtrl.create({
          title: message,
          buttons: ['OK']
        });
        alert.present();
    }

    showLog(){
      console.log(this.provider);
      console.log(myGlobals.token);
    }

}
