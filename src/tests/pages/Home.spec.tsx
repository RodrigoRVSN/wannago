import { render } from '@testing-library/react';
import Home from '../../pages';

const data = {
  name: 'Rodrigo Victor',
};

describe('Home page', () => {
  it('should renders correctly', () => {
    render(<Home data={data} />);
  });
});
