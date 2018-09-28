import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfig } from '../models/ApiConfig.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class UrlService {
  public apiConfig: ApiConfig;

  constructor(private http: HttpClient) {
  }

  public getBaseConfig() {
      return this.http.get(`https://api.themoviedb.org/3/configuration?api_key=${environment.apiKey}`)
        .toPromise().then((apiConfig: ApiConfig) => {
          this.apiConfig = apiConfig;
        });
  }

  public getSearchResultImageUrl = (imagePath: string) => {
    return `${this.apiConfig.images.base_url}w92/${imagePath}`;
  }

  public getMoviePosterUrl = (imagePath: string) => {
    return `${this.apiConfig.images.base_url}w185/${imagePath}`;
  }

  public getBackdropUrl = (imagePath: string) => {
    return `${this.apiConfig.images.base_url}w1280/${imagePath}`;
  }

  public getPersonProfileUrl = (imagePath: string) => {
    return `${this.apiConfig.images.base_url}w185/${imagePath}`;
  }

  public getCastProfileUrl = (imagePath: string) => {
    return `${this.apiConfig.images.base_url}w138_and_h175_face/${imagePath}`;
  }

  public getHomePageItemUrl = (imagePath: string, size: string) => {
    return `${this.apiConfig.images.base_url}${size}/${imagePath}`;
  }
}
