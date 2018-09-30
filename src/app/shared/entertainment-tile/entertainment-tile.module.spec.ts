import { EntertainmentTileModule } from './entertainment-tile.module';

describe('EntertainmentTileModule', () => {
  let entertainmentTileModule: EntertainmentTileModule;

  beforeEach(() => {
    entertainmentTileModule = new EntertainmentTileModule();
  });

  it('should create an instance', () => {
    expect(entertainmentTileModule).toBeTruthy();
  });
});
