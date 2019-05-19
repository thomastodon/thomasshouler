import {setup, tearDown} from './utility';
import App from "../App";

describe('within my app...', () => {

  let vm;

  beforeEach(() => {
    vm = setup(App);
  });

  describe('the title', () => {

    it('contains my name', () => {
      expect(document.title).to.equal('thomas shouler');
    });
  });

  afterEach(() => tearDown(vm));
});
