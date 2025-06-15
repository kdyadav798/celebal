import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // all, active, completed
  const [sortBy, setSortBy] = useState('date'); // date, alphabetical, priority

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error('Error loading todos from localStorage:', error);
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const addTodo = (text, priority = 'medium') => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now() + Math.random(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
        priority: priority
      };
      setTodos(prevTodos => [...prevTodos, newTodo]);
    }
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Remove todo
  const removeTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // Edit todo text
  const editTodo = (id, newText) => {
    if (newText.trim()) {
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === id ? { ...todo, text: newText.trim() } : todo
        )
      );
    }
  };

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  };

  // Filter todos based on current filter
  const getFilteredTodos = () => {
    let filtered = todos;
    
    switch (filter) {
      case 'active':
        filtered = todos.filter(todo => !todo.completed);
        break;
      case 'completed':
        filtered = todos.filter(todo => todo.completed);
        break;
      default:
        filtered = todos;
    }

    // Sort todos
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'alphabetical':
          return a.text.toLowerCase().localeCompare(b.text.toLowerCase());
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'date':
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });
  };

  const filteredTodos = getFilteredTodos();
  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>📝 My To-Do List</h1>
          <p className="app-subtitle">Stay organized and productive</p>
        </header>

        <TodoForm onAddTodo={addTodo} />

        <TodoFilters
          filter={filter}
          sortBy={sortBy}
          onFilterChange={setFilter}
          onSortChange={setSortBy}
          activeTodosCount={activeTodosCount}
          completedTodosCount={completedTodosCount}
          onClearCompleted={clearCompleted}
        />

        <TodoList
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onRemoveTodo={removeTodo}
          onEditTodo={editTodo}
        />

        {todos.length === 0 && (
          <div className="empty-state">
            <p>🎉 No tasks yet! Add one above to get started.</p>
          </div>
        )}

        {todos.length > 0 && filteredTodos.length === 0 && (
          <div className="empty-state">
            <p>No tasks match your current filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;