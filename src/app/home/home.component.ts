import { UrlService } from './../shared/url.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/Movie.model';
import { TVShow } from '../models/TVShow.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public moviesInTheatres: Array<Movie> = [];
  public onAirTvShows: Array<TVShow> = [];

  constructor(private route: ActivatedRoute, private urlService: UrlService) {

  }

  public getImageSize(index: number) {
    return index > 0 ? '' : 'w1000_and_h563_face';
  }


  public getImage = (fileName: string, size: string) => {
    return this.urlService.getHomePageItemUrl(fileName, size);
  }

  /**
   * Angular on init lifecycle hook
   */
  ngOnInit() {
    this.moviesInTheatres = this.route.snapshot.data.moviesInTheatres;
    this.onAirTvShows = this.route.snapshot.data.onAirTvShows;
  }
}
