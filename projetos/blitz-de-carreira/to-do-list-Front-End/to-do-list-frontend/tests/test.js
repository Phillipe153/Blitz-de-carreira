import {render, screen}from '@testing-library/react'
import NewTask from '../src/componets/newTask';
// const assert = require('assert')

describe('testando as funcionalidades do frontEnd', () => {
    it('Verifica se ha um input para uma nova tarefa',  () => {
        render(<NewTask />);
        const input = screen.getAllByRole('insertion', {selector:'input'});
        expect(input).toBeInTheDocument();
    });

    it('descrição', async () => {
        await requisicao();
      });
      it('descrição', async () => {
        await requisicao();
      });
      it('descrição', async () => {
        await requisicao();
      });
  });