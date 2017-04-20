import { PlataformaPage } from './app.po';

describe('plataforma App', () => {
  let page: PlataformaPage;

  beforeEach(() => {
    page = new PlataformaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
