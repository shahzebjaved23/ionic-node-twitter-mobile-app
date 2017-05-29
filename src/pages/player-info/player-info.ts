import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TweetsProvider } from "../../providers/tweets";
import * as $ from "jquery";

/**
 * Generated class for the PlayerInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-player-info',
  templateUrl: 'player-info.html',
  providers: [TweetsProvider]
})

export class PlayerInfo {

  private playerInfo;
  @ViewChild("errormessage") errormessage;
  @ViewChild("spinner") spinner;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tweetservice: TweetsProvider) {
  }

  ionViewDidLoad() {

  	/*
	* on view load, get the player info, and show to the page
  	*/
  	$(this.spinner.nativeElement).show();
  	this.tweetservice.getPlayerInfo(this.navParams.get("queryInfo").player).subscribe(
  		(data)=>{
	  		this.playerInfo = data.json();
	  		console.log(this.playerInfo); 
	  		$(this.spinner.nativeElement).hide();
  		},
  		(error)=>{
  			$(this.spinner.nativeElement).hide();
  		},	
  	)

    console.log('ionViewDidLoad PlayerInfo');
    console.log(this.navCtrl);
  }

}
