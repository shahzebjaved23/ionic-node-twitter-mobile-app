import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TweetsPage } from './tweets';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicPageModule.forChild(TweetsPage),
  ],
  exports: [
    // TweetsPage
  ]
})
export class TweetsModule {}
