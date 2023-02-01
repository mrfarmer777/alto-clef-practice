import { render, screen, fireEvent } from '@testing-library/react';
// import NoteChooser from './components/NoteChooser';
import App from './App';

const NoteChooser = require('./components/NoteChooser');
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

  test('it renders the note guess input', ()=>{
    render(<App />);
    const guessNoteButton = screen.getByText(/Guess Note/i);
    expect(guessNoteButton).toBeInTheDocument();

    const guessNoteInput = screen.getByPlaceholderText('Enter note name')
    expect(guessNoteInput).toBeInTheDocument();
  })

  test('guessing the right note shows success', () => {
    render(<App />);

    const guessNoteButton = screen.getByText(/Guess Note/i);
    expect(guessNoteButton).toBeInTheDocument();

    const guessNoteInput = screen.getByPlaceholderText('Enter note name')
    fireEvent.change(guessNoteInput, { target: {value: "c" }})
    fireEvent.click(guessNoteButton);

    const scoreDisplay = screen.getByTestId('score-display')
    expect(scoreDisplay).toHaveTextContent('Score: 1/1')
  })

  test('guessing the wrong note increments attempts', () => {
    render(<App />);

    const guessNoteButton = screen.getByText(/Guess Note/i);
    expect(guessNoteButton).toBeInTheDocument();

    const guessNoteInput = screen.getByPlaceholderText('Enter note name')
    fireEvent.change(guessNoteInput, { target: {value: "d" }})
    fireEvent.click(guessNoteButton);

    const scoreDisplay = screen.getByTestId('score-display')
    expect(scoreDisplay).toHaveTextContent('Score: 0/1')
  })
});
