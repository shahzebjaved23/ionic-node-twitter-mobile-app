import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TweetsProvider } from "../../providers/tweets";
import { TweetsPage } from "../tweets/tweets";
import { QueryInfo } from "../../models/query_info";
import { Tabs } from "../tabs/tabs";

/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TweetsProvider]
})

/*
* the main page, when the app loads up
*/
export class HomePage {

  team : String = "";
  player : String = "";
  author: String = "";
  source: String = "";
  useDb: boolean = false;
  player_team_op: String = "AND";
  team_author_op: String = "AND";

  constructor(public navCtrl: NavController, public navParams: NavParams, private tweetsprovider: TweetsProvider) {
  }

  /*
  * click handler for the get tweets button
  */
  onGetTweetsClick(){
  	var queryInfo = new QueryInfo(this.player,this.team,this.author,this.useDb, this.player_team_op, this.team_author_op);	
  	console.log(queryInfo);
    this.tweetsprovider.emitTweetsEvent(queryInfo);

    // navigate to the tabs page
  	this.navCtrl.push(Tabs,{queryInfo: queryInfo});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

}
