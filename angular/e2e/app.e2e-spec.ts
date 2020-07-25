import { AngularEcommerseTemplatePage } from './app.po';

describe('AngularEcommerse App', function() {
  let page: AngularEcommerseTemplatePage;

  beforeEach(() => {
    page = new AngularEcommerseTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
