import { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import css from './Modal.module.scss';

export const Modal = ({ children, modalActive, toggleModal }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  return (
    <div
      className={clsx(css.backdrop, {
        [css.isActive]: modalActive,
      })}
      onClick={toggleModal}
    >
      <div
        className={clsx(css.modal, {
          [css.isActive]: modalActive,
        })}
        onClick={evt => evt.stopPropagation()}
      >
        {children}
        <button className={css.button} type="button" onClick={toggleModal}>
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  modalActive: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
