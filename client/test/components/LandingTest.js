import { renderComponent, expect } from '../test_helper';
import Landing from '../../src/components/Landing';

describe('Landing', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Landing);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('landing');
  });
});