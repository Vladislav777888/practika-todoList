import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Box } from './Box';

import { getContacts } from 'redux/selectors';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <Box px={20} pt={10}>
      <h1>Phonebook</h1>
      <ContactForm />

      {contacts.length !== 0 && (
        <Box mt={20}>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Box>
      )}
      <ToastContainer />
    </Box>
  );
}
