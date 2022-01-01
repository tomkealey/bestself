import { render, screen, fireEvent } from '@testing-library/react';
import Courage from '../routes/Courage';

// initialize
test('renders press space bar', () => {
  render(<Courage />);
  const linkElement = screen.getByText(/Press the spacebar/i);
  expect(linkElement).toBeInTheDocument();
});

// card picker by keyboard
test('pick Learning', () => {
  render(<Courage />);
  fireEvent.keyDown(document, {key: 'L', code: 'KeyL'})
  const linkElement = screen.getByText(/Learning/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Random', () => {
  render(<Courage />);
  fireEvent.keyDown(document, {key: 'R', code: 'KeyR'})
  const linkElement = screen.getByText(/Random/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Relationships', () => {
  render(<Courage />);
  fireEvent.keyDown(document, {key: 'X', code: 'KeyX'})
  const linkElement = screen.getByText(/Relationships/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Experiences', () => {
  render(<Courage />);
  fireEvent.keyDown(document, {key: 'E', code: 'KeyE'})
  const linkElement = screen.getByText(/Experiences/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Healeth', () => {
  render(<Courage />);
  fireEvent.keyDown(document, {key: 'H', code: 'KeyH'})
  const linkElement = screen.getByText(/Health/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Self', () => {
  render(<Courage />);
  fireEvent.keyDown(document, {key: 'S', code: 'KeyS'})
  const linkElement = screen.getByText(/Self/i);
  expect(linkElement).toBeInTheDocument();
});