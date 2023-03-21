import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () =>
{
  test('renders a notation panel', () => {
    render(<App />);
    const outputElement = screen.getByTestId(/output-panel/i);
    expect(outputElement).toBeInTheDocument();
  });

  test('it renders a new note button', () => {
    render(<App />);
    const newNoteButton = screen.getByText(/New Note/i);
    expect(newNoteButton).toBeInTheDocument();
  });

  // TODO: Add test for changing content of notation chooser
  xtest('clicking new note draws a new note on the notation panel', () => {
  })

  test('guessing the right note shows success', () => {
    render(<App />);

    const guessCButton = screen.getByTestId('guess-c-note');
    expect(guessCButton).toBeInTheDocument();

    fireEvent.click(guessCButton);

    const scoreDisplay = screen.getByTestId('score-display')
    expect(scoreDisplay).toHaveTextContent('Score: 1/1')
  })

  test('guessing the wrong note increments attempts', () => {
    render(<App />);

    const guessDButton = screen.getByTestId('guess-d-note');
    expect(guessDButton).toBeInTheDocument();

    fireEvent.click(guessDButton);

    const scoreDisplay = screen.getByTestId('score-display')
    expect(scoreDisplay).toHaveTextContent('Score: 0/1')
  })

  test('clicking the reset button resets the score', () => {
    render(<App />);

    const guessCButton = screen.getByTestId('guess-c-note')
    const resetButton = screen.getByTestId('reset-score-btn')
    expect(guessCButton).toBeInTheDocument();

    fireEvent.click(guessCButton);

    const scoreDisplay = screen.getByTestId('score-display')
    expect(scoreDisplay).toHaveTextContent('Score: 1/1')

    fireEvent.click(resetButton)

    expect(scoreDisplay).toHaveTextContent('Score: 0/0')
  })
});
