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

  /**
   * A method that gets a fully qualified path for the supplied poster
   * @param poster the poster to get the full url for
   */
  public getPosterUrl = (poster: string) => {
    return this.urlService.getHomePageItemUrl(poster);
  }

  /**
   * Angular on init lifecycle hook
   */
  ngOnInit() {
    this.moviesInTheatres = this.route.snapshot.data.moviesInTheatres;
    this.onAirTvShows = this.route.snapshot.data.onAirTvShows;
  }
}
