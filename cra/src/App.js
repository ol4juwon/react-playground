import './App.css';
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { LineWave } from 'react-loader-spinner';
import Title from './components/title';
import * as Yup from 'yup';
import { Modal } from './components/modal';
import NewEventForm from './components/NewEventForm';

function App() {
  const [name, setName] = useState('Mario');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    setName('Luigi');
  };
  const handleNewEvent = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const id = events.length + 1;
    const today = new Date();
    const newEvent = {
      id,
      title: `Event ${id}`,
      date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    };
    setEvents([...events, newEvent]);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const addEvent = (event) => {
    console.log(event);
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
  };
  const handleDeleteEvent = (e, id) => {
    e.preventDefault();
    // using previous value state
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };
  const handleEditEvent = (e, id) => {
    e.preventDefault();
    const event = events.find((event) => event.id === id);
    setEvents(events.map((event) => (event.id === id ? { ...event, title: 'Edited' } : event)));
    console.log(event);
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return isLoading ? (
    <LineWave />
  ) : (
    <div className="App">
      <Title />
      {name}
      <button onClick={handleClick}>Change name</button>
      {events.sort().map((event) => (
        <div key={event.id} className="card">
          <h1>{event.title}</h1>
          <p>
            {event?.location}-{event.date}
          </p>
          <button onClick={(e) => handleDeleteEvent(e, event.id)}>Delete</button>
          <button onClick={(e) => handleEditEvent(e, event.id)}>Edit</button>
        </div>
      ))}
      <button onClick={() => setShowModal(true)}>Show modal</button>
      {showModal && (
        <Modal setShow={handleCloseModal}>
          <NewEventForm addEvents={addEvent} />
        </Modal>
      )}
    </div>
  );
}

// const App = useMemo(MemoizedApp, []);
export default App;
