import React from 'react';
import '../App.css';

function Card({ ticket, user }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <span className="user-avatar">{user.name[0]}</span>
      </div>
      <div className="card-title-container">
        <img src={`/photo/Backlog.svg`} alt="Priority icon" className="icon-inline" />
        <h3 className="card-title">{ticket.title}</h3>
      </div>
      <div className="card-footer">
      {/* <img src="/photo/Backlog.svg" alt="Icon description" className="icon" /> */}
      <span className="dot"></span>
        <span className="tag">{ticket.tag}</span>
      </div>
    </div>
  );
}

export default Card;