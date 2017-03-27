import { Ngeurope2016Page } from './app.po';

describe('ngeurope2016 App', () => {
  let page: Ngeurope2016Page;

  beforeEach(() => {
    page = new Ngeurope2016Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
