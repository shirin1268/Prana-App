import { Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Content} from 'ionic-angular';
import { Recipe} from '../shared/recipe.model';
import {DescriptionPage} from '../description/description';
import {RecipeServiceProvider} from '../../../providers/recipe-service/recipe-service';
import {HttpClient} from '@angular/common/http';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',


})

export class MainPage {
  content: Content;
  recipes: Recipe[] = [];
  recipesSearch: Recipe[];
  items: string[];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              private recipeService: RecipeServiceProvider) {
    this.recipesSearch = this.recipes;

  }

  recipeSelected(recipe: Recipe) {
    this.navCtrl.push(DescriptionPage, {recipe: recipe})
  }

  ionViewWillEnter() {
    this.recipeService
      .getRecipe()
      .subscribe(recipes => {
        this.recipes = recipes;
      });
  }


  ionViewDidLoad() {

    this.setFilteredItems();

  }

  setFilteredItems() {

    this.items = this.recipeService.filterItems(this.recipesSearch);

  }

}


