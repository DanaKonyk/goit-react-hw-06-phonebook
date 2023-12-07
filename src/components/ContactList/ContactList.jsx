import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useMemo } from 'react';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.users);
  const filter = useSelector(state => state.filter);

  const listOfContact = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  }, [contacts, filter]);

  return (
    <ul className={css.list}>
      {listOfContact.map(({ name, id, number }) => (
        <ContactItem key={id} name={name} id={id} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
