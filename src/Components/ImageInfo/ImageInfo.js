import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import fetchImage from '../../servises/Image-api';
import Loaders from '.././Loader/Loader';
import Error from '.././Error/Error';
import { useState, useEffect } from 'react';

export default function ImageInfo({ imageTitle }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const handlePageIncrement = () => {
    setPage(page => page + 1);
  };

  useEffect(() => {
    if (!imageTitle) {
      return;
    }

    fetchImages();

    function fetchImages() {
      setStatus('pending');
      fetchImage(imageTitle, page)
        .then(
          images => setImages(i => [...i, ...images.hits]),
          setStatus('resolved'),
        )
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }
  }, [imageTitle, page]);

  if (status === 'idle') {
    return <h1 style={{ textAlign: 'center' }}>Enter image title</h1>;
  }
  if (status === 'pending') {
    return <Loaders />;
  }
  if (status === 'rejected') {
    <Error message={error.message} />;
  }
  if (status === 'resolved') {
    return (
      <>
        <ImageGallery images={images} />
        <Button onLoadMore={handlePageIncrement} />
      </>
    );
  }
}
