import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';

import css from './ContactForm.module.css';
import { addContact } from 'redux/contacts/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const normalizedCase = name.toLowerCase();
    let isAdded = false;

    contacts.forEach(el => {
      if (el.name.toLowerCase() === normalizedCase) {
        alert(`${name} is already in contacts`);
        isAdded = true;
      }
    });

    if (isAdded) {
      return;
    }
    dispatch(addContact({ name, number }));
    event.target.reset();
  };

  return (
    <div className={css.wrap}>
      <form className={css.submit} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          <span>Add contact</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
