import Searchbar from './Components/Searchbar/Searchbar';
import ImageInfo from './Components/ImageInfo/ImageInfo';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

export default function App() {
  const [imageTitle, setImageTitle] = useState('');

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const onSearch = newName => {
    setImageTitle(newName);
    setImages([]);
    setPage(1);
  };

  return (
    <>
      <Searchbar onSubmit={onSearch} />
      <ImageInfo
        imageTitle={imageTitle}
        images={images}
        page={page}
        setImages={setImages}
        setPage={setPage}
      />
      <ToastContainer />
    </>
  );
}
