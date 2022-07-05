import {fireEvent, render, screen}from '@testing-library/react'
import NewTask from '../src/componets/newTask';
import App from './App';
// const assert = require('assert')

describe('testando as funcionalidades do frontEnd', () => {
    it('Verifica se ha um input para uma nova tarefa',  () => {
        render(<NewTask />);
          const input = screen.getByTestId("insert-new-task");
        expect(input).toBeInTheDocument();
    });
    it.only('Verifica se ao adicionar uma nova tarefa essa tarefa é renderizada na tela',  () => {
      render(<App />);
        const input = screen.getByTestId("insert-new-task");
        fireEvent.change(input, {target: {value: 'realizar os testes do frontEnd'}})
        const button = screen.getByTestId('button-to-insert');
        expect(button).toBeInTheDocument();
        fireEvent.click(button)
        const task = screen.getByRole('listitem')
        console.log(task);
        expect(task).toBeInTheDocument();
  });
  it('Verifica se é possivel deletar uma tarefa',  () => {
    render(<App />);
      const button = screen.getAllByTestId('delete-button');
      expect(button).toBeInTheDocument();
      fireEvent.click(button)
      const task = screen.getByRole('list', {name: 'realizar os testes do frontEnd , Pendente'} )
      expect(task).not.toBeInTheDocument();
});
it('Verifica se é possivel alterar o status uma tarefa',  () => {
  render(<App />);
    const button = screen.getAllByTestId('status-button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button)
    const task = screen.getByRole('list', {name: 'realizar os testes do frontEnd'} )
    expect(task).not.toBeInTheDocument();
});

   
  });