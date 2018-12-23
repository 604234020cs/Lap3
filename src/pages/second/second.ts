import { ThirdPage } from './../third/third';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goThird() {
    this.navCtrl.push(ThirdPage);
  }

  goBack() {
    this.navCtrl.pop();
}
}