import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContactAction } from 'redux/contactsSlice';
import { ListItem, ContactsText, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactAction(id));
  };

  return (
    <ListItem key={id}>
      <ContactsText>
        {name}: {number}
      </ContactsText>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
