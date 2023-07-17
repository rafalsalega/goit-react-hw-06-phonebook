import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ filteredContacts, handleDelete }) => (
  <ul>
    {filteredContacts.map(contact => (
      <li className={css.item} key={contact.id}>
        {contact.name} - {contact.number}
        <button onClick={() => handleDelete(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,  
  handleDelete: PropTypes.func.isRequired,
};