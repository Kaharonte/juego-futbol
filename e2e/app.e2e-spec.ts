import { JuegoFutbolPage } from './app.po';

describe('juego-futbol App', function() {
  let page: JuegoFutbolPage;

  beforeEach(() => {
    page = new JuegoFutbolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
