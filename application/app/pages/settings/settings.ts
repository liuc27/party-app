/**
 * Created by zhengliyi0417 on 2016/8/13.
 */
import {Component} from '@angular/core';
import {NavController,Events,NavParams,Alert,AlertController} from 'ionic-angular';
import {SettingsLoginLocal} from '../../providers/settings-login/settings-login-local';
import {SettingsLoginOauth} from '../../providers/settings-login/settings-login-oauth';
import {Http} from '@angular/http';
import {Register} from './register/register';
import myGlobals = require('../../globals');


@Component({
  templateUrl: 'build/pages/settings/settings.html',
  providers: [SettingsLoginLocal,SettingsLoginOauth]
})
export class SettingsPage {
  data: any;
  username: String;
  password: String;


  constructor(private nav:NavController,
              private params:NavParams,
              private events: Events,
              public SettingsLoginLocal:SettingsLoginLocal,
              public SettingsLoginOauth:SettingsLoginOauth,
              private http:Http,
              private alertCtrl: AlertController){
              console.log(myGlobals.token);
  }

  onPageWillEnter() {
    this.events.publish('showTabs');
  }

  showAlert(message) {
  //console.log(message);
    let alert = this.alertCtrl.create({
        title: message,
        buttons: ['OK']
      });

      alert.present();
  }

  // Local User Login
  localLogin(username,password){
    this.username=username;
    this.password=password;
    console.log(username);
    console.log(password);

    if (username == null || password == null) {
        this.showAlert('正しいユーザ名とパスワードを入力してください！');
    }else{

        this.SettingsLoginLocal.load(username,password)
          .then(data => {
            console.log(data );
            this.showAlert('login success');
          })


    }
  }

  // Go to Register Page
  register(){
    console.log("go register page");
    this.nav.push(Register);
  }

  // Login by OAuth
  openOauth(oauthName){
    console.log(oauthName);
    window.localStorage.setItem("provider", "google");
    this.SettingsLoginOauth.load(oauthName);
  }
}
