import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import fetchImage from '../../servises/Image-api';
import Loaders from '.././Loader/Loader';
import Error from '.././Error/Error';
import { useState, useEffect } from 'react';

export default function ImageInfo({
  imageTitle,
  images,
  page,
  setImages,
  setPage,
}) {
  // const [images, setImages] = useState([]);
  // const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const handlePageIncrement = () => {
    setPage(page => page + 1);
  };
  // function fetchImages(imageTitle, page) {
  //   setStatus('pending');
  //   fetchImage(imageTitle, page)
  //     .then(newImages => {
  //       if (newImages.total > 0) {
  //         setImages(prevImages => [...prevImages, ...newImages.hits]);
  //         setStatus('resolved');
  //       }
  //     })
  //     .catch(error => {
  //       setError(error);
  //       setStatus('rejected');
  //     });
  // }
  // useEffect(() => {
  //   // if (imageTitle === '') {
  //   //   return;
  //   // }
  //   // setStatus('pending');

  //   fetchImages(imageTitle, 1);
  // }, [imageTitle]);

  useEffect(() => {
    if (imageTitle === '') {
      return;
    }
    setStatus('pending');
    fetchImage(imageTitle, page)
      .then(newImages => {
        if (newImages.hits.length > 0) {
          // console.log(newImages);
          setImages(prevImages => [...prevImages, ...newImages.hits]);
          setStatus('resolved');
        }
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
    // setStatus('pending');

    // fetchImages(imageTitle, page);
  }, [imageTitle, page, setImages]);

  if (status === 'pending') {
    return <Loaders />;
  }
  if (status === 'idle') {
    return <h1 style={{ textAlign: 'center' }}>Enter image title</h1>;
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
