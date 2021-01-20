import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';
import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [imageTitle, setImageTitle] = useState('');

  const handleInputChange = e => {
    setImageTitle(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (imageTitle.trim() === '') {
      toast.error('Enter image title');
      return;
    }
    onSubmit(imageTitle);

    setImageTitle('');
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.button}>
          <span className={s.button_label}>Search</span>
        </button>

        <input
          onChange={handleInputChange}
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          value={imageTitle}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
