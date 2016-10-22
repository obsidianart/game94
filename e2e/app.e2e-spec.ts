import { Game94Page } from './app.po';

describe('game94 App', function() {
  let page: Game94Page;

  beforeEach(() => {
    page = new Game94Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
