import { Angular2NinjaPage } from './app.po';

import { browser, element, by } from 'protractor';

describe('angular2-ninja App', function () {
  let page: Angular2NinjaPage;

  beforeEach(() => {
    page = new Angular2NinjaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

  it('should display images and buttons', () => {

    // get '/'
    page.navigateTo();

    expect(element.all(by.css('img')).count()).toBe(2);
    expect(element.all(by.tagName('button')).count()).toBe(2);
  });

});
