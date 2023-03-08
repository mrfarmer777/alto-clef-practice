import { render, screen, fireEvent } from '@testing-library/react';
import NoteNameButtons from './NoteNameButtons'

const noteNames = ['a','b','c','d','e','f','g']

describe('NoteNameButtons', () => {
  test('they render one button for each note name', () => {
    render(<NoteNameButtons />)


    noteNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    })
  })

  test('each button calls the function passed when clicked', () => {
    const mockCallback = jest.fn();

    render(<NoteNameButtons checkNote={mockCallback}/>)

    noteNames.forEach((name) => {
      const targetButton = screen.getByText(name)
      fireEvent.click(targetButton);
      expect(mockCallback).toBeCalled();
    })

  })
})