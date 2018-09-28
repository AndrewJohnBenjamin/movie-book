import { UrlService } from '../shared/url.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/Movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public movie: Movie;

  constructor(private route: ActivatedRoute, private urlService: UrlService) {

  }

  /**
   * Angular on init lifecycle hook
   */
  ngOnInit() {
    this.movie = this.route.snapshot.data.movie;
  }
}
