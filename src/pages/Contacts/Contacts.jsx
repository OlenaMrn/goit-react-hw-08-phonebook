import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOperations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/contactsSelectors';

import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
// import { ContactList } from '../../components/ContactList/ContactList';

import css from './Contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <p>Phonebook</p>
      <ContactForm />
      {/* <Filter /> */}
      <h1>Contacts</h1>
      {/* {contacts.length > 0 && <ContactList />} */}
    </div>
  );
};

export default Contacts;
