import { render, screen, fireEvent } from '@testing-library/react';
import Edison from '../routes/Edison';

// initialize
test('renders press space bar', () => {
  render(<Edison />);
  const linkElement = screen.getByText(/Press the spacebar/i);
  expect(linkElement).toBeInTheDocument();
});

// card picker by keyboard
test('pick Entrepreneurship', () => {
  render(<Edison />);
  fireEvent.keyDown(document, {key: 'E', code: 'KeyE'})
  const linkElement = screen.getByText(/Entrepreneurship/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Random', () => {
  render(<Edison />);
  fireEvent.keyDown(document, {key: 'R', code: 'KeyR'})
  const linkElement = screen.getByText(/Random/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Relationships', () => {
  render(<Edison />);
  fireEvent.keyDown(document, {key: 'X', code: 'KeyX'})
  const linkElement = screen.getByText(/Relationships/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Creativity', () => {
  render(<Edison />);
  fireEvent.keyDown(document, {key: 'C', code: 'KeyC'})
  const linkElement = screen.getByText(/Creativity/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Future', () => {
  render(<Edison />);
  fireEvent.keyDown(document, {key: 'F', code: 'KeyF'})
  const linkElement = screen.getByText(/Future/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Personal Development', () => {
  render(<Edison />);
  fireEvent.keyDown(document, {key: 'P', code: 'KeyP'})
  const linkElement = screen.getByText(/Personal Development/i);
  expect(linkElement).toBeInTheDocument();
});