import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Icon } from '../Icon';
import { ModalDiv, CloseBtn } from './ModalFromRoot.styled';

export const ModalFromRoot = ({ toggleModal, children }) => {
  const modalRoot = document.getElementById('root-modal');

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  });

  const closeModal = ({ target, code }) => {
    if (target.id === 'modalClose' || code === 'Escape') {
      document.body.style.overflowY = 'auto';
      toggleModal();
    }
  };

  return createPortal(
    <ModalDiv id={'modalClose'} onClick={closeModal}>
      <div>
        <CloseBtn onClick={toggleModal} type="button" aria-label="Close">
          <Icon id="close" width={24} height={24} />
        </CloseBtn>

        {children}
      </div>
    </ModalDiv>,
    modalRoot
  );
};

ModalFromRoot.propTypes = {
  toggleModal: PropTypes.func,
  children: PropTypes.element.isRequired,
};
