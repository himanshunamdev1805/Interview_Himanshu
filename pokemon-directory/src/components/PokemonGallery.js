import React from 'react';
import Modal from 'react-modal';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

Modal.setAppElement('#root');

const PokemonGallery = ({ isOpen, images, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal-content">
      <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
    </Modal>
  );
};

export default PokemonGallery;
