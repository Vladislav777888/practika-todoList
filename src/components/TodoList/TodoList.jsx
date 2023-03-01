import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTasks } from 'redux/selectors';
import { toggleCompleted } from 'redux/tasksSlice';

import { TodoItem } from 'components/TodoItem/index';
import { Modal } from 'components/Modal';
import { StyledCheckbox } from 'components/TodoItem/TodoItem.styled';

import { StyledList, StyledItem, StyledTodoList } from './TodoList.styled';
import css from './TodoList.module.scss';

export const TodoList = () => {
  const [id, setId] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();

  const toggleModal = obj => {
    setIsActive(prev => !prev);

    if (obj?.evt?.currentTarget.textContent) {
      setId(obj.id - 1);
    }
  };

  const handleToggle = () => dispatch(toggleCompleted(tasks[id].id));

  return (
    <>
      <StyledList>
        <StyledItem>
          <h3>ID</h3>
        </StyledItem>
        <StyledItem>
          <h3>TITLE</h3>
        </StyledItem>
        <StyledItem>
          <h3>DESCRIPTION</h3>
        </StyledItem>
        <StyledItem>
          <h3>STATUS</h3>
        </StyledItem>
      </StyledList>

      <StyledTodoList>
        {tasks.map(({ id, title, text, completed }) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            text={text}
            completed={completed}
            click={toggleModal}
          />
        ))}
      </StyledTodoList>

      <Modal modalActive={isActive} toggleModal={toggleModal}>
        <>
          {tasks.length !== 0 && (
            <>
              <h2 className={css.title}>{tasks[id].title}</h2>
              <h4 className={css.title}>Description</h4>
              <p className={css.text}>{tasks[id].text}</p>
              <div className={css.wrapper}>
                <h4 className={css.title}>Status</h4>
                <StyledCheckbox
                  type="checkbox"
                  checked={tasks[id].completed}
                  onChange={handleToggle}
                />
              </div>
            </>
          )}
        </>
      </Modal>
    </>
  );
};
