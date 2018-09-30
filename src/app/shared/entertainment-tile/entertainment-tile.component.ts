import { Component, OnInit, Input } from '@angular/core';
import { MovieSearchResult } from '../../models/MovieSearchResult.model';
import { TvShowSearchResult } from '../../models/TvShowSearchResult.model';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-entertainment-tile',
  templateUrl: './entertainment-tile.component.html',
  styleUrls: ['./entertainment-tile.component.scss']
})
export class EntertainmentTileComponent implements OnInit {

  @Input()
  public moviesInTheatres: Array<MovieSearchResult>;

  @Input()
  public onAirTvShows: Array<TvShowSearchResult>;

  constructor(private urlService: UrlService) { }

  public getImage(fileName: string, size: string) {
    return this.urlService.getHomePageItemUrl(fileName, size);
  }

  public ngOnInit() {
  }
}
