import PropTypes from 'prop-types';

export default function Error({ message }) {
  return (
    <div role="alert">
      <p>Error!!!!! {message}</p>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
