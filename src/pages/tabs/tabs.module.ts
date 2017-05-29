import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tabs } from './tabs';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicPageModule.forChild(Tabs),
  ],
  exports: [
    // Tabs
  ]
})
export class TabsModule {}
