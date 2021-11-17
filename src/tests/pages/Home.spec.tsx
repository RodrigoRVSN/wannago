import { render } from '@testing-library/react';
import Home from '../../pages';

describe('Home page', () => {
  it('should renders correctly', () => {
    render(<Home />);
  });
});
