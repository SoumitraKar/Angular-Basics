import { Angular4FirstPage } from './app.po';

describe('angular4-first App', () => {
  let page: Angular4FirstPage;

  beforeEach(() => {
    page = new Angular4FirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
