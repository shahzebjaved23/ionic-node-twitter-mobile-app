import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from "@angular/http";
import { TweetsPage } from "../pages/tweets/tweets";
import { Tabs } from "../pages/tabs/tabs";
import { ChartPage } from "../pages/chart/chart";
import { PlayerInfo } from "../pages/player-info/player-info";
import { Tweet } from "../pages/tweet/tweet";
import { Ng2TweetModule } from 'ng2-tweet/lib/index';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TweetsPage,
    Tabs,
    ChartPage,
    PlayerInfo,
    Tweet
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    Ng2TweetModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TweetsPage,
    Tabs,
    ChartPage,
    PlayerInfo,
    Tweet
  ],
  providers: [
    StatusBar,     
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
