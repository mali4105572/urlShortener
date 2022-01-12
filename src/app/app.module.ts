import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainStoreModule,ShortnerStoreModule} from 'store';
import { EnvironmentTOKEN } from 'core';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ConfigurationService } from 'api';
import { TableModule } from 'primeng/table';
import { ShortnerModule } from './shortner/shortner/shortner.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    MainStoreModule,
    ShortnerStoreModule,
    ShortnerModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initConfigValues, deps: [ConfigurationService], multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: EnvironmentTOKEN, useValue: environment }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initConfigValues(config: ConfigurationService) {
  return (() => config.initConfiguration(environment.configPath));
}