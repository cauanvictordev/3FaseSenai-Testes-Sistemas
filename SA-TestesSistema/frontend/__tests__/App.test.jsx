import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App'; 
import '@testing-library/jest-dom';

test('deve incrementar o contador ao clicar no botão', () => {
  render(<App />);
  
  // 1. Procura o botão inicial
  const button = screen.getByText(/count is 0/i);
  
  // 2. Simula o clique no botão
  fireEvent.click(button);
  
  // 3. Verifica se o contador subiu para 1
  expect(button).toHaveTextContent('count is 1');
});