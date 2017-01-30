import { WeatherComponent } from '../components/weather/weather';

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//pages
import { TabsPage } from '../pages/tabs/tabs';
import { WeatherPage } from '../pages/weather/weather';
import { SettingsPage } from '../pages/settings/settings';
//services
import { WeatherService } from '../providers/weather';


const PAGES = [
  SettingsPage,
  WeatherPage
]
const SERVICES = [
  WeatherService
]
const COMPONENTS = [
  WeatherComponent
]

@NgModule({
  declarations: [
    MyApp,
    ...PAGES,
    TabsPage,
    ...COMPONENTS
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   ...PAGES,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ...SERVICES]
})
export class AppModule {}
