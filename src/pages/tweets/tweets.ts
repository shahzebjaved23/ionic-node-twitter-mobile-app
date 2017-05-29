import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TweetsProvider } from "../../providers/tweets";
import * as $ from "jquery";

/**
 * Generated class for the Tweets page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tweets',
  templateUrl: 'tweets.html',
  providers: [TweetsProvider]
})
export class TweetsPage {

  tweets;

  tweetsAvailable: boolean = true;
  tweetsEmpty: boolean = false;

  @ViewChild("spinner") spinner;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tweetsprovider: TweetsProvider) {
  }

  ionViewDidLoad() {
  	/*
	* use the nav params to get the tweets, use database if query info has use db
  	*/
    if(!this.navParams.get('queryInfo').useDb){
		if(this.navParams.get('queryInfo').source == "rest" || true){
			$(this.spinner.nativeElement).show();
			this.tweetsprovider.getTweetsByRest(this.navParams.get('queryInfo').player, this.navParams.get('queryInfo').team, this.navParams.get('queryInfo').author,this.navParams.get("queryInfo").player_team_op,this.navParams.get("queryInfo").team_author_op).subscribe((tweets)=>{
				this.tweets = tweets.json();
				this.tweetsAvailable = true
				if(this.tweets.length == 0){
					this.tweetsEmpty = true;
				}else{
					this.tweetsEmpty = false;
				}
			},
			()=>{
				this.tweetsAvailable = false;
				$(this.spinner.nativeElement).hide();	
			}, 
			()=>{
				$(this.spinner.nativeElement).hide();
			})
		}
	}else{
		/*
		* use database if useDb
		*/
		$(this.spinner.nativeElement).show();
		this.tweetsprovider.getTweetsFromDb(this.navParams.get('queryInfo').player, this.navParams.get('queryInfo').team, this.navParams.get('queryInfo').author,this.navParams.get("player_team_op"),this.navParams.get("team_author_op")).subscribe((tweets)=>{
			this.tweets = tweets.json();
			this.tweetsAvailable = true;
			if(this.tweets.length == 0){
				this.tweetsEmpty = true;
			}else{
				this.tweetsEmpty = false;
			}
		},
		()=>{
			this.tweetsAvailable = false;
			$(this.spinner.nativeElement).hide();
		},
		()=>{
			$(this.spinner.nativeElement).hide();
		})
	}
  }
}
