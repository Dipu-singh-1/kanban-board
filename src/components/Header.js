import React, { useState, useEffect } from "react";
import "../App.css";

function Header({ onDisplayChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");

  useEffect(() => {
    onDisplayChange(grouping, sorting);
    setIsOpen(false);
  }, [grouping, sorting, onDisplayChange]);

  return (
    <header className="header">
      <button onClick={() => setIsOpen(!isOpen)} className="display-button">
        <img
          src="/photo/Display.svg"
          alt="Before Display Icon"
          className="icon-before"
        />
        Display
        <img
          src="/photo/down.svg"
          alt="After Display Icon"
          className="icon-after"
        />
      </button>
      {isOpen && (
        <div className="display-form">
          <div>
            <label htmlFor="grouping">Grouping</label>
            <select
              id="grouping"
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div>
            <label htmlFor="sorting">Ordering</label>
            <select
              id="sorting"
              value={sorting}
              onChange={(e) => setSorting(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
