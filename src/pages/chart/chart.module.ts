import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartPage } from './chart';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicPageModule.forChild(ChartPage),
  ],
  exports: [
    // ChartPage
  ]
})
export class ChartModule {}
