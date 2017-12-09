import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { MainPage} from '../Recipes/main/main';
import { AddrecipePage} from '../Recipes/addrecipe/addrecipe';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public http: HttpClient) {

  }

  public gotoMainPage(){
    this.navCtrl.push(MainPage);
  }

  public gotoAddrecipePage(){
    this.navCtrl.push(AddrecipePage);
  }
}
