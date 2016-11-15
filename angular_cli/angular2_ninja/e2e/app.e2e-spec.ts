import { Angular2NinjaPage } from './app.po';

describe('angular2-ninja App', function() {
  let page: Angular2NinjaPage;

  beforeEach(() => {
    page = new Angular2NinjaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
