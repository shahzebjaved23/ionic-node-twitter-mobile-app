import { Component , Input, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ng2TweetService } from 'ng2-tweet/lib/index';
import * as $ from "jquery";
import * as moment from "moment";


/**
 * Generated class for the Tweet page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tweet',
  templateUrl: 'tweet.html',
})
export class Tweet implements OnInit{

  @Input() tweet: any;

  @ViewChild("tweet_div") tweet_div;
  @ViewChild("spinner") spinner;
  @ViewChild("errormessage") errormessage;

  ngOnInit(){

  	/*
	* format the tweet created at date
  	*/
  	this.tweet.created_at = moment.utc(this.tweet.created_at).format("h:mm a - MMM DD YYYY");
  	 
  	/*
  	* use the twitter oembed api endpoint to get the html of tweet
  	*/ 
  	$.ajax({
      url: "https://api.twitter.com/1.1/statuses/oembed.json?id="+this.tweet.id_str,
      dataType: "jsonp",
      success: (data)=>{
        console.log(data);
        console.log(this.tweet_div);
        $(this.tweet_div.nativeElement).html(data.html);
        $(this.spinner.nativeElement).hide();
      },
      failure:()=>{
      	$(this.spinner.nativeElement).hide();
      	$(this.errormessage.nativeElement).show();
      }
    });
   // $(this.spinner.nativeElement).show();
   //  window["twttr"].ready(
   //      (evt) => {
   //        window["twttr"].widgets.createTweet(
   //          this.tweet.id_str,
   //          this.tweet_div.nativeElement,
   //          {});
   //        $(this.spinner.nativeElement).hide();
   //      }
   //    );

   //    $(window).on('load', ()=>{
   //      $('iframe[id^=twitter-widget-]').each(function () {
   //        var head = $(this).contents().find('head');
   //        if (head.length) {
   //          head.append('<style>.timeline { max-width: 100% !important; width: 100% !important; } .timeline .stream { max-width: none !important; width: 100% !important; }</style>');
   //        }
   //        $('#twitter-widget-0').append($('<div class=timeline>'));
   //      })
   //    });
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tweet');
  }
}
