import { CloseBtn, ModalDiv } from './ModalFromRoot.styled';

import { Icon } from '../Icon';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

export const ModalFromRoot = ({
  root = 'root-modal',
  overlayId = 'modalClose',
  toggleModal,
  align = 'center',
  padding = '',
  children,
}) => {
  const modalRoot = document.getElementById(root);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  });

  const closeModal = ({ target, code }) => {
    if (root === 'root-docs') {
      return;
    }

    if (target.id === overlayId || code === 'Escape') {
      document.body.style.overflowY = 'auto';
      toggleModal();
    }
  };

  return createPortal(
    <ModalDiv
      id={overlayId}
      align={align}
      padding={padding}
      onClick={closeModal}
    >
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
  align: PropTypes.string,
};
