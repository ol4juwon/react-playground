import './NewEvent.css';
import React, { useRef, useState } from 'react';
export default function NewEventForm({ addEvents }) {
  const title = useRef();
  const date = useRef();
  const [location, setLocation] = useState('Manchester');
  const resetForm = () => {
    title.current.value = '';
    date.current.value = '';
  };
  Math.random();
  return (
    <form
      className="new-event-form"
      onSubmit={(e) => {
        e.preventDefault();
        addEvents({
          title: title.current?.value,
          date: date.current?.value,
          location,
          id: Math.floor(Math.random() * 12000)
        });
      }}>
      <label>
        <span>Event Title:</span>
        <input required type="text" id="title" ref={title} />
      </label>
      <label>
        <span>Event Date:</span>
        <input required type="date" id="date" ref={date} />
      </label>
      <label>
        <span>Event Location:</span>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="Manchester">Manchester</option>
          <option value="London">London</option>
          <option value="Liverpool">Liverpool</option>
        </select>
      </label>
      <button type="submit">Submit</button>
      <p>
        title- {title.current?.value}, Date - {date.current?.value}, Location - {location}
      </p>
      <p onClick={resetForm}>Reset</p>
    </form>
  );
}
