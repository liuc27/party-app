/**
 * Created by zhengliyi on 9/11/16.
 */
import {Component, ViewChild, ElementRef} from '@angular/core';
import {Page, App, Events, NavController, NavParams, Popover, AlertController} from 'ionic-angular';
import {SettingsPage} from '../settings';
import {Http} from '@angular/http';
import myGlobals = require('../../../globals');
import {SettingsUserinfo} from '../../../providers/settings-login/settings-userinfo';

@Component({
    templateUrl: 'build/pages/settings/oauth/oauth.html',
    providers: [SettingsUserinfo]
})
export class Oauth {
  data: any;
  provider: String;
  token: String;



  constructor(private nav:NavController,
              private params:NavParams,
              private events: Events,
              private http:Http,
              public SettingsUserinfo:SettingsUserinfo,
              private alertCtrl: AlertController){
              this.provider = window.localStorage.getItem("provider");
              this.token = myGlobals.token;
              console.log(this.provider);
              console.log(this.token);
              if (this.provider == null || this.token == null) {
                  this.showAlert('provider or token is null');
              }else{
                  this.SettingsUserinfo.load(this.provider,this.token)
                    .then(data => {
                      console.log(data);
                      this.showAlert('login success');
                    })
              }


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
