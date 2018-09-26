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

  constructor(private route: ActivatedRoute, private urlService: UrlService
  ) { }

  public posterUrlPath = (posterPath: string) => {
    return this.urlService.getHomePageItemUrl(posterPath);
  }

  ngOnInit() {
    this.moviesInTheatres = this.route.snapshot.data.moviesInTheatres;
    this.onAirTvShows = this.route.snapshot.data.onAirTvShows;
  }
}
