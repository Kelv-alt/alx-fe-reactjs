import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByTestId('todo-input'), {
      target: { value: 'Test add feature' },
    });
    fireEvent.click(screen.getByTestId('add-button'));
    expect(screen.getByText('Test add feature')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    expect(todoItem).toHaveStyle('text-decoration: none');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteBtn = screen.getByTestId('delete-2');
    fireEvent.click(deleteBtn);
    expect(screen.queryByText('Write tests')).not.toBeInTheDocument();
  });
});
