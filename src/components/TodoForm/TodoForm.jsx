import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { addTask } from 'redux/tasksSlice';
import { Box } from 'components/Box';

import { Button, Label, Form, Text } from './TodoForm.styled';
import css from './TodoForm.module.css';

export function TodoForm() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [id, setId] = useState(
    () => JSON.parse(localStorage.getItem('id')) ?? 1
  );

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('id', JSON.stringify(id));
  });

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'title':
        setTitle(value);
        setErrorTitle(false);
        break;
      case 'text':
        setText(value);
        setErrorText(false);
        break;
      default:
        return;
    }
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    const {
      elements: { title, text },
    } = evt.target;

    if (text.value.trim() === '' && title.value.trim() === '') {
      setErrorText(true);
      setErrorTitle(true);
      return;
    }

    if (title.value.trim() === '') {
      setErrorTitle(true);
      return;
    }

    if (text.value.trim() === '') {
      setErrorText(true);
      return;
    }

    const todo = {
      title: title.value,
      text: text.value,
      completed: false,
      id,
    };

    dispatch(addTask(todo));

    setId(prev => prev + 1);
    setTitle('');
    setText('');
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
          <Label>
            Title:
            <input
              className={clsx(css.input, {
                [css.error]: errorTitle,
              })}
              type="text"
              name="title"
              value={title}
              onChange={handleInputChange}
              placeholder="Enter title"
            />
          </Label>
          {errorTitle ? (
            <Text>This field is empty</Text>
          ) : (
            <Box height="18px"></Box>
          )}
        </Box>

        <Box display="flex" flexDirection="column">
          <Label>
            Descroption:
            <input
              className={clsx(css.input, {
                [css.error]: errorText,
              })}
              type="text"
              name="text"
              value={text}
              onChange={handleInputChange}
              placeholder="Enter description"
            />
          </Label>
          {errorText ? (
            <Text>This field is empty</Text>
          ) : (
            <Box height="18px"></Box>
          )}
        </Box>

        <Button type="submit">Create</Button>
      </Form>
    </>
  );
}
