import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getFilterValue,
  getErrorStatus,
} from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import React from 'react';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const error = useSelector(getErrorStatus);

  const filtersContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(statusFilter.toLowerCase()) ||
      contact.number
        .replace(/-|\s/g, '')
        .includes(statusFilter.replace(/-|\s/g, ''))
  );

  return filtersContacts.length > 0 ? (
    <ul className={css.list}>
      {filtersContacts.map(({ id, name, number }) => (
        <li key={id}>
          <div>
            <img
              alt={`Avatar n°${name}`}
              src={`/static/images/avatar/${name}.jpg`}
            />
          </div>
          <div>{`${name}: ${number}`}</div>
          <div>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    (error && <p>Error: {error}</p>) || <p>No contacts</p>
  );
};

export default ContactList;
