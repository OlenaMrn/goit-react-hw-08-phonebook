import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getErrorStatus, getIsLoadingStatus } from 'redux/contacts/selectors';
import { fetchContact } from 'redux/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import StatusFilter from 'components/StatusFilter/StatusFilter';
import ContactList from 'components/ContactList/ContactList';

import * as React from 'react';

const styles = {
  
  loading: {
    fontFamily: 'Montserrat, sans-serif',
    margin: '0',
    textAlign: 'center',
    color: '#97bfd4',
    
  },
  }

const Contact = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingStatus);
  const error = useSelector(getErrorStatus);



  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <div>
        <ContactForm />
      </div>
      <div>
        <StatusFilter />
        {isLoading && !error ? <p style={styles.loading}>Loading...</p> : <ContactList />}
      </div>
    </>
  );
};

export default Contact;
