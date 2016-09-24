/**
 * Created by zhengliyi on 9/11/16.
 */
import {Component, ViewChild, ElementRef} from '@angular/core';
import {Page, App, Events, NavController, NavParams, Popover, AlertController} from 'ionic-angular';
import {SettingsRegister} from '../../../providers/settings-login/settings-register';
import {SettingsPage} from '../settings';
import {Http} from '@angular/http';


@Component({
    templateUrl: 'build/pages/settings/register/register.html',
    providers: [SettingsRegister]
})
export class Register {
  data: any;
  username: String;
  password: String;
  email: String;
  nickname: String;


  constructor(private nav:NavController,
              private params:NavParams,
              private events: Events,
              public SettingsRegister:SettingsRegister,
              private http:Http,
              private alertCtrl: AlertController){
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

    backLogin(){
        this.nav.push(SettingsPage);
    }

    register(username,password,email,nickname){
      this.username=username;
      this.password=password;
      this.email=email;
      this.nickname=nickname;

      console.log(username);
      console.log(password);

      if (username == null || password == null) {
          this.showAlert('ユーザ名とパスワードを入力してください！');
      }else{
          this.SettingsRegister.load(username,password,email,nickname)
            .then(data => {
            console.log(data);
            this.showAlert('register success');
            })
      }

    }


}
