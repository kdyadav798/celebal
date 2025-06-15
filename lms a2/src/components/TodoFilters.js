import React from 'react';
import './TodoFilters.css';

const TodoFilters = ({
  filter,
  sortBy,
  onFilterChange,
  onSortChange,
  activeTodosCount,
  completedTodosCount,
  onClearCompleted
}) => {
  const totalTodos = activeTodosCount + completedTodosCount;

  return (
    <div className="todo-filters">
      <div className="stats">
        <div className="stat-item">
          <span className="stat-number">{totalTodos}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{activeTodosCount}</span>
          <span className="stat-label">Active</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{completedTodosCount}</span>
          <span className="stat-label">Completed</span>
        </div>
      </div>

      <div className="filter-controls">
        <div className="filter-group">
          <label>Filter:</label>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => onFilterChange('all')}
            >
              📋 All
            </button>
            <button
              className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
              onClick={() => onFilterChange('active')}
            >
              ⏳ Active
            </button>
            <button
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => onFilterChange('completed')}
            >
              ✅ Completed
            </button>
          </div>
        </div>

        <div className="sort-group">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="sort-select"
          >
            <option value="date">📅 Date Created</option>
            <option value="alphabetical">🔤 Alphabetical</option>
            <option value="priority">⚡ Priority</option>
          </select>
        </div>

        {completedTodosCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="clear-completed-btn"
            title="Remove all completed tasks"
          >
            🧹 Clear Completed ({completedTodosCount})
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoFilters;