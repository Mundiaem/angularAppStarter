import { NinjaCli102Page } from './app.po';

describe('ninja-cli102 App', () => {
  let page: NinjaCli102Page;

  beforeEach(() => {
    page = new NinjaCli102Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
