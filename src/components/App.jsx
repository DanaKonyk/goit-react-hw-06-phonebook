import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const listOfContacts = useSelector(state => state.contacts.users);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {listOfContacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Your contact list is empty</p>
      )}
    </div>
  );
};
