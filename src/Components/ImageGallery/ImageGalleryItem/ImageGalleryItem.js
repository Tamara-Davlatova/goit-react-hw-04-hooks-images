import s from './ImageGalleryItem.module.css';
import Modal from '../../Modal/Modal';
import { useState } from 'react';

export default function ImageGalleryItem({ id, galeryImage, alt, modalImg }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <li key={id} className={s.Item}>
      <img
        src={galeryImage}
        alt={alt}
        className={s.Image}
        onClick={toggleModal}
      />
      {showModal && <Modal onClose={toggleModal} src={modalImg} alt={alt} />}
    </li>
  );
}
