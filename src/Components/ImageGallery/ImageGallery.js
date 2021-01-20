import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export default function ImageGallery({ images }) {
  return (
    <ul className={s.Gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          galeryImage={image.webformatURL}
          alt={image.tags}
          modalImg={image.largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
