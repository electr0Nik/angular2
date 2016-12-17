import { Angular2OauthPage } from './app.po';

describe('angular2-oauth App', function() {
  let page: Angular2OauthPage;

  beforeEach(() => {
    page = new Angular2OauthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
