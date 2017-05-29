import { Injectable, EventEmitter} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { QueryInfo } from "../models/query_info";

/*
  Generated class for the Tweets provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TweetsProvider {
  
  url = "https://node-twitter-123.herokuapp.com"

  // url = "http://localhost:5000";

  // emits an event when the get tweets button is pushed
  public tweetsEventEmitter = new EventEmitter<QueryInfo>();
  
  constructor(public http: Http) {
    console.log('Hello Tweets Provider');
  }

  // service to get the link preview
  getLinkPreview(url){
    return this.http.get(this.url+"/linkpreview?url="+url)
  }


  /*
  * service to get the o embed api
  * @param {Tweet} tweet
  */ 
  getOEmbed(tweet){
    return this.http.get("https://publish.twitter.com/oembed?url=https://twitter.com/"+tweet.user.screen_name+"/status/"+tweet.id_str);
  }

  /*
  * service to get player info
  * @param {string} player name
  */  
  getPlayerInfo(player){
    return this.http.get(this.url+"/getSparqlQuery?player="+player);
  }

  /*
  * service to get frequency
  * @param {string} player name
  * @param {string} author
  * @param {string} player_team_op
  * @param {string} team_author_op
  */ 
  getFrequency(player: String, team: String , author: String, player_team_op: String, team_author_op: String){
    return this.http.get(this.url+"/frequency?player="+player+"&team="+team+"&author="+author+"&player_team_op="+player_team_op+"&team_author_op="+team_author_op);
  }

  /*
  * emits the get tweets event
  * @param {QueryInfo} queryInfo
  */
  emitTweetsEvent(queryInfo: QueryInfo){
    this.tweetsEventEmitter.emit(queryInfo);
  }

  /*
  * service to get tweets by rest
  * @param {string} player name
  * @param {string} author
  * @param {string} player_team_op
  * @param {string} team_author_op
  */
  getTweetsByRest(player:String,team:String,author:String, player_team_op:String, team_author_op:String){
  	return this.http.get(this.url + "/getTweetsByRest?player="+player+"&team="+team+"&author="+author+"&player_team_op="+player_team_op+"&team_author_op="+team_author_op)
  }

  /*
  * service to get tweets by db
  * @param {string} player name
  * @param {string} author
  * @param {string} player_team_op
  * @param {string} team_author_op
  */
  getTweetsFromDb(player:String,team:String,author:String, player_team_op:String, team_author_op:String){
	return this.http.get(this.url+"/getTweetsFromDb?player="+player+"&team="+team+"&author="+author+"&player_team_op="+player_team_op+"&team_author_op="+team_author_op);
  }

}
