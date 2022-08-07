import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from "./setupTests";
import { LoginPage } from '../pages/login';

describe('<loginPage />', () => {
  it('renders a title  with text "Login"', () => {
    const route: string = '/login'
    renderWithRouter(
      <LoginPage />,
      { route }
    );
    const title = screen.getByText(/login/i);
    expect(title).toBeInTheDocument();
  });
  it('renders a email input', () => {
    const route: string = '/login'
    renderWithRouter(
      <LoginPage />,
      { route }
    );
    const inputElements = screen.getAllByTestId(/email/i);
    inputElements.forEach((element) => expect(element).toBeInTheDocument());
  });

  it('renders an "parcel" image at left side of the input email', () => {
    const route: string = '/login'
    renderWithRouter(
      <LoginPage />,
      { route }
    );
    const image = screen.getByTestId(/emailOutlinedIcon/i);
    expect(image).toBeInTheDocument();
  });
  it('renders an "x" image at right side of the input email after typing on it', async () => {
    const route: string = '/login'
    renderWithRouter(
      <LoginPage />,
      { route }
    );

    const input = screen.getByLabelText(/email/i);
    fireEvent.change(input, { target: { value: 'aaaa' } })
    const image = screen.queryByTestId(/ClearOutlinedIcon/i);
    expect(image).toBeInTheDocument();
  });
  it('tests handleChange function', async () => {
    const route: string = '/login'
    renderWithRouter(
      <LoginPage />,
      { route }
    );

    const input = screen.getByLabelText(/email/i);
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'aaaa' } })
    expect(input).toHaveValue('aaaa');
  });

  it('renders a signup button', () => {
    const route: string = '/login'
    renderWithRouter(
      <LoginPage />,
      { route }
    );
    const button = screen.getByRole('button', { name: /sign up and go/i });
    expect(button).toBeInTheDocument();
  });
  it('shows invalid email notification  if an invalid email is provided', async () => {
    const route: string = '/login'
    renderWithRouter(
      <LoginPage />,
      { route }
    );

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'admin' } });

    const loginButton = screen.getByRole('button', { name: /sign up and go/i });
    fireEvent.click(loginButton);

    const invalidPasswordWarning = screen.getByText('Por favor, confira o email digitado e tente novamente');
    expect(invalidPasswordWarning).toBeInTheDocument();

    const invalidLoginWarning = screen.getByTestId(/warning/i);
    expect(invalidLoginWarning).toBeInTheDocument();
  });
  it('makes fetch post if email are correct', async () => {

    jest.spyOn(global, 'fetch') as jest.Mock;

    const route: string = '/login'

    renderWithRouter(
      <LoginPage />,
      { route }
    );

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });

    const signUpButton = screen.getByRole('button', { name: /sign up and go/i });
    fireEvent.click(signUpButton);

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});