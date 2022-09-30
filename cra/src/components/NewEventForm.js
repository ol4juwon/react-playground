import './NewEvent.css';
import React, { useState } from 'react';
export default function NewEventForm({ addEvents }) {
  const [title, setTitle] = React.useState('');
  const [date, setDate] = React.useState('');
  const handleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };
  const resetForm = () => {
    setTitle('');
    setDate('');
  };
  Math.random();
  return (
    <form className="new-event-form">
      <label>
        <span>Event Title:</span>
        <input type="text" id="title" value={title} onChange={handleChange} />
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addEvents({ title, date, id: Math.random() });
        }}>
        Submit
      </button>
      <p>
        title- {title}, Date - {date}
      </p>
      <p onClick={resetForm}>Reset</p>
    </form>
  );
}
