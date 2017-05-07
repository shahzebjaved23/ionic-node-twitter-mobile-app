import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tweets } from "../../providers/tweets"
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
  providers: [Tweets]
})
export class TweetsPage {

  tweets;

  tweetsAvailable: boolean = true;
  tweetsEmpty: boolean = false;

  @ViewChild("spinner") spinner;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tweetsprovider: Tweets) {
  }

  ionViewDidLoad() {
    if(!this.navParams.get('queryInfo').useDb){
		if(this.navParams.get('queryInfo').source == "rest" || true){
			$(this.spinner.nativeElement).show();
			this.tweetsprovider.getTweetsByRest(this.navParams.get('queryInfo').player, this.navParams.get('queryInfo').team, this.navParams.get('queryInfo').author).subscribe((tweets)=>{
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
		$(this.spinner.nativeElement).show();
		this.tweetsprovider.getTweetsFromDb(this.navParams.get('queryInfo').player, this.navParams.get('queryInfo').team, this.navParams.get('queryInfo').author,this.navParams.get('queryInfo').source).subscribe((tweets)=>{
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
