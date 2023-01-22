import { render, screen } from '@testing-library/react';
import NotationDisplay from './NotationDisplay';

test('renders an svg canvas', () => {
  render(
    <div>
      <NotationDisplay />
      <div id={'output'} title={'notation-output'}></div>
    </div>
    );
  const content = screen.getByTitle(/notation-output/i);
  // TODO: Find the svg and assert it is rendered!

  expect(content).toBeInTheDocument();
});