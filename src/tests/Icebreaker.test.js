import { render, screen, fireEvent } from '@testing-library/react';
import Icebreaker from '../routes/Icebreaker';

// initialize
test('renders press space bar', () => {
  render(<Icebreaker />);
  const linkElement = screen.getByText(/Press the spacebar/i);
  expect(linkElement).toBeInTheDocument();
});

// card picker by keyboard
test('pick Life', () => {
  render(<Icebreaker />);
  fireEvent.keyDown(document, {key: 'L', code: 'KeyL'})
  const linkElement = screen.getByText(/Life/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Random', () => {
  render(<Icebreaker />);
  fireEvent.keyDown(document, {key: 'R', code: 'KeyR'})
  const linkElement = screen.getByText(/Random/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Deep', () => {
  render(<Icebreaker />);
  fireEvent.keyDown(document, {key: 'D', code: 'KeyD'})
  const linkElement = screen.getByText(/Deep/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Experiences', () => {
  render(<Icebreaker />);
  fireEvent.keyDown(document, {key: 'E', code: 'KeyE'})
  const linkElement = screen.getByText(/Experiences/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick If you could...', () => {
  render(<Icebreaker />);
  fireEvent.keyDown(document, {key: 'I', code: 'KeyI'})
  const linkElement = screen.getByText(/If you could.../i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Would you rather...', () => {
  render(<Icebreaker />);
  fireEvent.keyDown(document, {key: 'W', code: 'KeyW'})
  const linkElement = screen.getByText(/Would you rather.../i);
  expect(linkElement).toBeInTheDocument();
});