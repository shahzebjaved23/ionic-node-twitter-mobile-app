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
export class Tweets {
  
  url = "https://node-twitter-123.herokuapp.com"

  infoEmitter = new EventEmitter<QueryInfo>();	

  constructor(public http: Http) {
    console.log('Hello Tweets Provider');
  }

  getTweetsByRest(player:String,team:String,author:String){
  	return this.http.get(this.url + "/getTweetsByRest?player="+player+"&team="+team+"&author="+author)
  }

  getTweetsFromStream(player:String,team:String,author:String){
	return this.http.get(this.url+"/getTweetsFromStream?player="+player+"&team="+team+"&author="+author);
  }

  getTweetsFromDb(player:String,team:String,author:String,type: String){
	return this.http.get(this.url+"/getTweetsFromDb?player="+player+"&team="+team+"&author="+author);
  }


  emitQueryInfo(player :String, team : String, author: String, source: String, useDb: boolean){
  	var queryInfo = new QueryInfo(player,team,author,source,useDb);
  	this.infoEmitter.emit(queryInfo);
  }

}
