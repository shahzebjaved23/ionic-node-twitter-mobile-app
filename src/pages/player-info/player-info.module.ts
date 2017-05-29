import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerInfo } from './player-info';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicPageModule.forChild(PlayerInfo),
  ],
  exports: [
    // PlayerInfo
  ]
})
export class PlayerInfoModule {}
