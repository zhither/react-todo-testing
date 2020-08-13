import React from 'react';
import {render, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';
import AddTodo from './AddTodo';

it('Should accepts values for the new todo', () => {
  const mockAddTodo = jest.fn();
  //change getByLabelText for test-id ? look for it later 
  const { getByLabelText, getByText} = render(<AddTodo addTodo={mockAddTodo} />);
  const Input = getByLabelText(/add todo/i);
  // fireEvent.change(Input, {target: { value: 'task 1'}});
  user.type(Input, 'task 1');
  // expect(input.value).toContain('task 1');
  expect(Input).toHaveValue('task 1');

  const sumbmitBtn= getByText(/add todo/i);
  // fireEvent.click(sumbmitBtn); -> both works
  user.click(sumbmitBtn);
  expect(mockAddTodo).toHaveBeenCalled;
  expect(mockAddTodo).toHaveBeenCalledTimes(1);

})