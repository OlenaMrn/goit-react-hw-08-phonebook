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
          <div className={css.wrapper}>
            <div>
              {`${name}:`} {''} {`${number}`}
            </div>
            <div>
              <button
                className={css.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    (error && <p>Error: {error}</p>) || <p className={css.noResult}>No contacts</p>
  );
};

export default ContactList;
