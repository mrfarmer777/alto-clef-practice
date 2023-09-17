import React from 'react';
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

  xtest('changing the opacity slider affects the grand staff opacity', ()=>{
    render(<App />)

    const violaLevelSelector = screen.getByText('3. The Viola Fingerboard')
    fireEvent.click(violaLevelSelector)

    const opacitySlider = screen.getByTestId('opacity-slider')
    fireEvent.change(opacitySlider, {target: {value: '80'}})
  })

  test('it increments the attempts when guessing an incorrect note', () => {
    render(<App />);

    const guessDButton = screen.getByTestId('guess-d-note');
    expect(guessDButton).toBeInTheDocument();

    fireEvent.click(guessDButton);

    const scoreDisplay = screen.getByTestId('score-display')
    expect(scoreDisplay).toHaveTextContent('Score: 0/1')
  })

  test('it does not change the note until it is guessed correctly', () => {
    render(<App />);

    const guessDButton = screen.getByTestId('guess-d-note');
    expect(guessDButton).toBeInTheDocument();

    fireEvent.click(guessDButton);

    const scoreDisplay = screen.getByTestId('score-display')
    expect(scoreDisplay).toHaveTextContent('Score: 0/1')

    fireEvent.click(guessDButton);

    expect(scoreDisplay).toHaveTextContent('Score: 0/2')

    const guessCButton = screen.getByTestId('guess-c-note');
    expect(guessCButton).toBeInTheDocument();

    fireEvent.click(guessCButton);

    expect(scoreDisplay).toHaveTextContent('Score: 1/3')

  })

  test('it shows an error bubble when a wrong note is guessed', () => {
    render(<App />);

    const guessDButton = screen.getByTestId('guess-d-note');
    expect(guessDButton).toBeInTheDocument();

    fireEvent.click(guessDButton);

    const wrongBubble = screen.getByTestId('wrong-bubble')
    expect(wrongBubble).toBeInTheDocument();
  })

  test('it does not show an error bubble when a correct note is guessed', () => {
    render(<App />);

    const guessCButton = screen.getByTestId('guess-c-note');
    expect(guessCButton).toBeInTheDocument();

    fireEvent.click(guessCButton);

    const wrongBubble = screen.queryByTestId('wrong-bubble')
    expect(wrongBubble).not.toBeInTheDocument();
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
