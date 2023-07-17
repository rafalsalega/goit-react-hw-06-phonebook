import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact, setFilter } from '../redux/actions';
import { nanoid } from '@reduxjs/toolkit';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const id = nanoid();
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number, id }));
    e.target.reset();
  };

  const handleDelete = id => {
    dispatch(removeContact(id));
  };

  const handleFilter = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilter} />
      <ContactList
        filteredContacts={filteredContacts}
        handleDelete={handleDelete}
      />
    </>
  );
};