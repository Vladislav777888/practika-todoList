import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { toggleCompleted } from 'redux/tasksSlice';

import { ListItem, ListItemContent, StyledCheckbox } from './TodoItem.styled';

export const TodoItem = ({ id, title, text, completed, click }) => {
  const dispatch = useDispatch();
  const contentTitleRef = useRef(null);
  const contentTextRef = useRef(null);

  useEffect(() => {
    if (contentTitleRef.current.textContent.length > 12) {
      contentTitleRef.current.textContent =
        contentTitleRef.current.textContent.slice(0, 12) + '...';
    }

    if (contentTextRef.current.textContent.length > 14) {
      contentTextRef.current.textContent =
        contentTextRef.current.textContent.slice(0, 14) + '...';
    }
  }, []);

  const handleToggleCompleted = () => {
    dispatch(toggleCompleted(id));
    click();
  };

  return (
    <>
      <ListItem
        key={id}
        onClick={evt => {
          click({ id, evt });
        }}
      >
        <ListItemContent>{id}</ListItemContent>
        <ListItemContent ref={contentTitleRef}>{title}</ListItemContent>
        <ListItemContent ref={contentTextRef}>{text}</ListItemContent>
        <StyledCheckbox
          type="checkbox"
          checked={completed}
          onChange={handleToggleCompleted}
        />
      </ListItem>
    </>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  click: PropTypes.func,
};
