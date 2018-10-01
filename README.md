# MovieBook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.
Welcome to the movie book. A web interface into the public [TMDB Api](https://www.themoviedb.org/documentation/api?language=en-US). The interface allows for searching for movies, tv shows and people and also allows being able to browse content relevant to that person/Tv show/movie.

Future versions will include the ability to watch trailers, browse stills as well as the ability to view Tv seasons and other collections provided by the api.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Only a basic e2e exists for this project - It is the default ootb one provided by the angular cli. This is due to the application querying a public api that is not controlled by itself. Therefore the content of the pages could change at any point. A future improvement could be to provide a stable mock api that the test can run against but it is beyond the scope of this innitial version

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
