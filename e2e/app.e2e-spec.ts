import { AcTodoPage } from './app.po';

describe('ac-todo App', () => {
  let page: AcTodoPage;

  beforeEach(() => {
    page = new AcTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
