import { GithubOauth2Page } from './app.po';

describe('github-oauth2 App', function() {
  let page: GithubOauth2Page;

  beforeEach(() => {
    page = new GithubOauth2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
