import { EventoPage } from './../pages/evento/evento';
import { AmigoPage } from './../pages/amigo/amigo';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  
  @ViewChild('content') menu : NavController
  rootPage = HomePage;
  amigoPage = AmigoPage;
  eventoPage = EventoPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public menuController: MenuController 
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  navegar(pagina:any){
    this.menu.setRoot(pagina);
    this.menuController.close();
  }
}

