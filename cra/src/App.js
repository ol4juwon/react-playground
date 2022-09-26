import './App.css';
import React, { useState } from 'react';
import { Formik } from 'formik';

import * as Yup from 'yup';

function App() {
  const [name, setName] = useState('Mario');
  const [events, setEvents] = useState([
    { id: 1, title: 'Event 1', date: '2021-01-01' },
    { id: 2, title: 'Event 2', date: '2021-01-02' },
    { id: 3, title: 'Event 3', date: '2021-01-03' },
    { id: 4, title: 'Event 4', date: '2021-01-04' }
  ]);
  const handleClick = (e) => {
    e.preventDefault();
    setName('Luigi');
  };
  const handleNewEvent = (e) => {
    e.preventDefault();
    const id = events.length + 1;
    const today = new Date();
    const newEvent = {
      id,
      title: `Event ${id}`,
      date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    };
    setEvents([...events, newEvent]);
  };
  const handleDeleteEvent = (e, id) => {
    e.preventDefault();
    setEvents(events.filter((event) => event.id !== id));
  };
  const handleEditEvent = (e, id) => {
    e.preventDefault();
    const event = events.find((event) => event.id === id);
    setEvents(events.map((event) => (event.id === id ? { ...event, title: 'Edited' } : event)));
    console.log(event);
  };
  return (
    <div className="App">
      {name}
      <button onClick={handleClick}>Change name</button>
      {events.map((event) => (
        <div key={event.id}>
          <h1>{event.title}</h1>
          <p>{event.date}</p>
          <button onClick={(e) => handleDeleteEvent(e, event.id)}>Delete</button>
          <button onClick={(e) => handleEditEvent(e, event.id)}>Edit</button>
        </div>
      ))}
      <Formik
        initialValues={{ title: '', date: '' }}
        onSubmit={handleNewEvent}
        validationSchema={Yup.object({
          title: Yup.string().required('Required'),
          date: Yup.date().required('Required')
        })}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleNewEvent}>
            <input type="text" name="title" value={values.title} onChange={handleChange} />
            <input type="text" name="date" value={values.date} onChange={handleChange} />
            <button type="submit">Add new event</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

// const App = useMemo(MemoizedApp, []);
export default App;
