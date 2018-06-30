import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
// import { initialize } from 'initialization.js';
declare var initialize
declare var quitTetris

/**
 * Generated class for the OfflineTetrisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-offline-tetris',
  templateUrl: 'offline-tetris.html',
})
export class OfflineTetrisPage {
  messages: { [key: string]: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService) {
    let short_messages = ["play", "howto_play_title", "howto_play_goal", "howto_play_tap_keyboard", "howto_play_tap_screen",
                          "howto_play_instructions_1", "howto_play_instructions_2", "paused_press_enter", "paused", "short_howto_play_1_keyboard", 
                          "short_howto_play_2_keyboard", "short_howto_play_1", "short_howto_play_2", "short_howto_play_3"] 
    this.messages = {};
    for (let message of short_messages) {
      this.translateService.get("TBLOCKS_" + message.toUpperCase()).subscribe(translatedMesssage => {
          this.messages[message] = translatedMesssage;
      });
    }
  }

  ionViewDidLoad() {
    initialize(0, this.messages);
  }

  ionViewDidLeave() {
    quitTetris();
  }

}
