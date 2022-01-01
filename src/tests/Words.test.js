import { render, screen, fireEvent } from '@testing-library/react';
import Words from '../routes/Words';

// initialize
test('renders press space bar', () => {
  render(<Words />);
  const linkElement = screen.getByText(/Press the spacebar/i);
  expect(linkElement).toBeInTheDocument();
});

// card picker by keyboard
test('pick Life', () => {
  render(<Words />);
  fireEvent.keyDown(document, {key: 'L', code: 'KeyL'})
  const linkElement = screen.getByText(/Life/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Random', () => {
  render(<Words />);
  fireEvent.keyDown(document, {key: 'R', code: 'KeyR'})
  const linkElement = screen.getByText(/Random/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Relationships', () => {
  render(<Words />);
  fireEvent.keyDown(document, {key: 'X', code: 'KeyX'})
  const linkElement = screen.getByText(/Relationships/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick World', () => {
  render(<Words />);
  fireEvent.keyDown(document, {key: 'W', code: 'KeyW'})
  const linkElement = screen.getByText(/World/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Education', () => {
  render(<Words />);
  fireEvent.keyDown(document, {key: 'E', code: 'KeyE'})
  const linkElement = screen.getByText(/Education/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Self', () => {
  render(<Words />);
  fireEvent.keyDown(document, {key: 'S', code: 'KeyS'})
  const linkElement = screen.getByText(/Self/i);
  expect(linkElement).toBeInTheDocument();
});