import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TweetsPage } from "../tweets/tweets";
import { ChartPage } from "../chart/chart";
import { PlayerInfo } from "../player-info/player-info";

/**
 * Generated class for the Tabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

/*
This class provides the tabs page, which embed three pages, tweetsPage, chartPage and playerinfo
*/
export class Tabs {

	tweets = TweetsPage; 
	chart = ChartPage;
	playerInfo = PlayerInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }

}
