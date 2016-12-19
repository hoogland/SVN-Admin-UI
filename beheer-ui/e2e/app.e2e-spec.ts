import { BeheerUiPage } from './app.po';

describe('beheer-ui App', function() {
  let page: BeheerUiPage;

  beforeEach(() => {
    page = new BeheerUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
