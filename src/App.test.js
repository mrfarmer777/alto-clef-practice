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

  xtest('clicking new note draws a new note on the notation panel', () => {
  })

  test('it renders the note guess input', ()=>{
    render(<App />);
    const guessNoteButton = screen.getByText(/Guess Note/i);
    expect(guessNoteButton).toBeInTheDocument();

    const guessNoteInput = screen.getByPlaceholderText('Enter note name')
    expect(guessNoteInput).toBeInTheDocument();
  })

  xtest('guessing the right note shows success', () => {
    const appComponent = shallow(<App />)
    render(<App />);
    const guessNoteButton = screen.getByText(/Guess Note/i);
    expect(guessNoteButton).toBeInTheDocument();

    const guessNoteInput = screen.getByPlaceholderText('Enter note name')
    expect(guessNoteInput).toBeInTheDocument();
  })
});
