import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IonicStorageModule} from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MainPage} from '../pages/Recipes/main/main';
import { AddrecipePage} from '../pages/Recipes/addrecipe/addrecipe';
import {DescriptionPage} from '../pages/Recipes/description/description';
import {RecipeServiceProvider} from '../providers/recipe-service/recipe-service';
import {HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    AddrecipePage,
    DescriptionPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClient,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    AddrecipePage,
    DescriptionPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecipeServiceProvider,
    Camera
  ]

})
export class AppModule {}
