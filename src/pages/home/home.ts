import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tweets } from "../../providers/tweets";
import { TweetsPage } from "../tweets/tweets";
import { QueryInfo } from "../../models/query_info";

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
  providers: [Tweets]
})
export class HomePage {

  team : String = "";
  player : String = "";
  author: String = "";
  source: String = "";
  useDb: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tweetsprovider: Tweets) {
  }

  onGetTweetsClick(){
  	this.tweetsprovider.emitQueryInfo(this.player,this.team,this.author,this.source,this.useDb);
  	var queryInfo = new QueryInfo(this.player,this.team,this.author,this.source,this.useDb);	
  	this.navCtrl.push(TweetsPage,{queryInfo: queryInfo});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

}
