/**
 * Created by zhengliyi on 9/11/16.
 */
import {Component, ViewChild, ElementRef} from '@angular/core';
import {Page, App, Events, NavController, NavParams, Popover, AlertController} from 'ionic-angular';
//import {SettingsRegister} from '../../../providers/settings-login/settings-register';
//import {SettingsPage} from '../settings';
import {Http} from '@angular/http';


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
              //public SettingsRegister:SettingsRegister,
              private http:Http,
              private alertCtrl: AlertController){
  }

    onPageWillEnter() {
        this.events.publish('showTabs');

        this.provider=window.localStorage.getItem("provider");
        thid.token=JSON.parse(window.localStorage.getItem("token")).oauth.access_token;;
        console.log(provider);
        console.log(provider);
    }

    showAlert(message) {
      let alert = this.alertCtrl.create({
          title: message,
          buttons: ['OK']
        });
        alert.present();
    }

}
