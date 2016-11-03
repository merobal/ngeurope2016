import { NgeuropePage } from './app.po';

describe('ngeurope App', function() {
  let page: NgeuropePage;

  beforeEach(() => {
    page = new NgeuropePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
