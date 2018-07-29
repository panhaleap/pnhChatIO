import { PnhChatIOPage } from './app.po';

describe('pnh-chat-io App', function() {
  let page: PnhChatIOPage;

  beforeEach(() => {
    page = new PnhChatIOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
