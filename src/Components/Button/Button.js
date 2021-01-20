import s from './Button.module.css';
import { animateScroll as scroll } from 'react-scroll';
import PropTypes from 'prop-types';

export default function Button({ onLoadMore }) {
  const loadMore = () => {
    onLoadMore();
    scroll.scrollToBottom();
  };
  return (
    <div className={s.container}>
      <button type="submit" className={s.Button} onClick={loadMore}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
