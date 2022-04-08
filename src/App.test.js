import { render, screen } from '@testing-library/react';
import Home from './Pages/Home/home.component';

test('Thannasorn', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Thannasorn/i);
  expect(linkElement).toBeInTheDocument();
});
