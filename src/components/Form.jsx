import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/store';

const { addNewContactAsync } = actions;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addNewContactAsync({ name, phone }));
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>

        
        <label>
          Number
          <input
            type="text"
            name="number"
            value={number}
            onChange={handleInputChange}
            required
          />
        </label>

        
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default ContactForm;
