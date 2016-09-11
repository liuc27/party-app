/**
 * Created by zhengliyi0417 on 2016/8/13.
 */
import {Component} from '@angular/core';
import {NavController,Events,NavParams,Alert} from 'ionic-angular';
import {SettingsLoginLocal} from '../../providers/settings-login/settings-login-local';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'build/pages/settings/settings.html',
  providers: [SettingsLoginLocal]
  //providers: [settings-getLoginStatus]
})
export class SettingsPage {
  data: any;
  username: String;
  password: String;


  constructor(private nav:NavController,
              private params:NavParams,
              private events: Events,
              public SettingsLoginLocal:SettingsLoginLocal,
              private http:Http){
  }

  onPageWillEnter() {
    this.events.publish('showTabs');
  }

  showAlert(message) {
    let alert = Alert.create({
        title: message,
        buttons: ['Ok']
    });
    this.nav.present(alert);
  }

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
          console.log(data);
          })


    }
  }

  openOauth(oauthName){
    console.log(oauthName);
  }
}
