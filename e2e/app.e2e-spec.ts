import { CharonFrontPage } from './app.po';

describe('charon-front App', function() {
  let page: CharonFrontPage;

  beforeEach(() => {
    page = new CharonFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
