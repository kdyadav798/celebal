import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!text.trim()) {
      setError('Please enter a task description');
      return;
    }
    
    if (text.trim().length < 3) {
      setError('Task must be at least 3 characters long');
      return;
    }
    
    if (text.trim().length > 100) {
      setError('Task must be less than 100 characters');
      return;
    }

    // Clear error and add todo
    setError('');
    onAddTodo(text, priority);
    setText('');
    setPriority('medium');
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (error) {
      setError(''); // Clear error when user starts typing
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="input-container">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="What needs to be done?"
            className={`todo-input ${error ? 'error' : ''}`}
            maxLength={100}
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="priority-select"
          >
            <option value="low">🟢 Low</option>
            <option value="medium">🟡 Medium</option>
            <option value="high">🔴 High</option>
          </select>
          <button type="submit" className="add-button">
            ➕ Add Task
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="character-count">
          {text.length}/100 characters
        </div>
      </div>
    </form>
  );
};

export default TodoForm;