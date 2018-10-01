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

  /**
   * A method that retrieves the Url for the supplied image in the supplied size
   * @param fileName the name of the image to retrieve to url for
   * @param size the size of the image to retrieve the url for
   */
  public getImageUrl(fileName: string, size: string) {
    return this.urlService.getImageUrl(fileName, size);
  }

  /**
   * angular init lifecycle hook
   */
  public ngOnInit() {
  }
}
