import { render, screen, fireEvent } from '@testing-library/react';
import Intimacy from '../routes/Intimacy';

// initialize
test('renders press space bar', () => {
  render(<Intimacy />);
  const linkElement = screen.getByText(/Press the spacebar/i);
  expect(linkElement).toBeInTheDocument();
});

// card picker by keyboard
test('pick Past', () => {
  render(<Intimacy />);
  fireEvent.keyDown(document, {key: 'P', code: 'KeyP'})
  const linkElement = screen.getByText(/Past/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Random', () => {
  render(<Intimacy />);
  fireEvent.keyDown(document, {key: 'R', code: 'KeyR'})
  const linkElement = screen.getByText(/Random/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Intimacy', () => {
  render(<Intimacy />);
  fireEvent.keyDown(document, {key: 'I', code: 'KeyI'})
  const linkElement = screen.getByText(/Intimacy/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Relationship', () => {
  render(<Intimacy />);
  fireEvent.keyDown(document, {key: 'X', code: 'KeyX'})
  const linkElement = screen.getByText(/Relationship/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Life', () => {
  render(<Intimacy />);
  fireEvent.keyDown(document, {key: 'L', code: 'KeyL'})
  const linkElement = screen.getByText(/Life/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick About you', () => {
  render(<Intimacy />);
  fireEvent.keyDown(document, {key: 'Y', code: 'KeyY'})
  const linkElement = screen.getByText(/About you/i);
  expect(linkElement).toBeInTheDocument();
});