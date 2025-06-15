import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onToggle, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [error, setError] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
    setError('');
  };

  const handleSave = () => {
    // Validation
    if (!editText.trim()) {
      setError('Task cannot be empty');
      return;
    }
    
    if (editText.trim().length < 3) {
      setError('Task must be at least 3 characters long');
      return;
    }
    
    if (editText.trim().length > 100) {
      setError('Task must be less than 100 characters');
      return;
    }

    onEdit(editText);
    setIsEditing(false);
    setError('');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
    setError('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '🟡';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}`}>
      <div className="todo-content">
        <div className="todo-main">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={onToggle}
            className="todo-checkbox"
          />
          
          <div className="todo-text-container">
            {isEditing ? (
              <div className="edit-container">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => {
                    setEditText(e.target.value);
                    if (error) setError('');
                  }}
                  onKeyDown={handleKeyPress}
                  className={`edit-input ${error ? 'error' : ''}`}
                  maxLength={100}
                  autoFocus
                />
                {error && <div className="error-message">{error}</div>}
                <div className="edit-actions">
                  <button onClick={handleSave} className="save-btn">✅ Save</button>
                  <button onClick={handleCancel} className="cancel-btn">❌ Cancel</button>
                </div>
              </div>
            ) : (
              <div className="todo-text" onClick={handleEdit}>
                <span className={`text ${todo.completed ? 'strikethrough' : ''}`}>
                  {todo.text}
                </span>
                <div className="todo-meta">
                  <span className="priority-badge">
                    {getPriorityIcon(todo.priority)} {todo.priority}
                  </span>
                  <span className="date-badge">
                    📅 {formatDate(todo.createdAt)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="todo-actions">
          {!isEditing && (
            <>
              <button
                onClick={handleEdit}
                className="edit-btn"
                title="Edit task"
              >
                ✏️
              </button>
              <button
                onClick={onRemove}
                className="remove-btn"
                title="Delete task"
              >
                🗑️
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;