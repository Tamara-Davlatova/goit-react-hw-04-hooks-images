import Searchbar from './Components/Searchbar/Searchbar';
import ImageInfo from './Components/ImageInfo/ImageInfo';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

export default function App() {
  const [imageTitle, setImageTitle] = useState('');

  return (
    <>
      <Searchbar onSubmit={setImageTitle} />
      <ImageInfo imageTitle={imageTitle} />
      <ToastContainer />
    </>
  );
}
