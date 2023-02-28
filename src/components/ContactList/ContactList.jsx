import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

import { ContactItem } from 'components/ContactItem';
import { Box } from '../Box';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <Box mt={10} ml={30} as="ul">
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </Box>
  );
};
