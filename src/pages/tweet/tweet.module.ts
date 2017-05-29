import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tweet } from './tweet';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicPageModule.forChild(Tweet),
  ],
  exports: [
    // Tweet
  ]
})
export class TweetModule {}
