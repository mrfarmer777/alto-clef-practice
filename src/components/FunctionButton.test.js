import { render, screen, fireEvent} from '@testing-library/react';
import FunctionButton from './FunctionButton';

describe('FunctionButton', () => {

  test('it displays the button name passed as a prop', () => {
    render(
      <FunctionButton label={'Sharks!'} />
    );
    const button = screen.getByText(/Sharks!/i);

    expect(button).toBeInTheDocument();
  })

  test('it calls the function passed to it when clicked', () => {
    const mockFunction = jest.fn();
    render(
      <FunctionButton label={'Sharks!'} callback={mockFunction} />
    );

    const button = screen.getByText(/Sharks!/i);
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })

    fireEvent(button, clickEvent)

    expect(mockFunction).toHaveBeenCalled();
  })
})

