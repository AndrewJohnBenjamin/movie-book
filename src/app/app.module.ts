import { HomeModule } from './home/home.module';
import { UrlService } from './shared/url.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule, MatInputModule } from '@angular/material';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material';
import { APIRequestInterceptorService } from './shared/api-request-interceptor.service';
import { MovieModule } from './movie/movie.module';
import { TvShowModule } from './tv-show/tv-show.module';
import { PersonModule } from './person/person.module';
import { DiscoverModule } from './discover/discover.module';

export function urlInitializationProvider(urlService: UrlService) {
  return () => urlService.getBaseConfig();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    HomeModule,
    MovieModule,
    TvShowModule,
    PersonModule,
    DiscoverModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: urlInitializationProvider, deps: [ UrlService ], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: APIRequestInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
