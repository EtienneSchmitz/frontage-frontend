import { Observable } from 'rxjs/Rx';
import { FAppListPage } from './../f-app-list/f-app-list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isUp: boolean;
  exception: any;
  token: string = "vide";
  public userName: string = "PainAuChocolat";

  constructor(public navCtrl: NavController, public authentication: AuthenticationProvider) {
    Observable.interval(500 * 60).subscribe(x => {
      authentication.isUp().subscribe(response => this.isUp = response, e => this.handleError(e));
    });
  }

  start() {
    this.authentication.refreshToken(this.userName).subscribe(result => {
      if (result === true) {
        this.toAppList();
      } else {
        console.log("stay here !");
      }
    });
  }

  toAppList() {
    this.navCtrl.push(FAppListPage);
  }

  refreshTokenValue() {
    this.authentication.token;
  }

  handleError(e: any): any {
    this.isUp = false;
    this.exception = e;
    console.log("Error status : " + e.status);
  }
}