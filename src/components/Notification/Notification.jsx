import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ name }) => {
  return <div className={css.box}>Tutaj będzie tekst o braku statystyk{name}</div>;
};

Notification.propTypes = { name: PropTypes.string.isRequired };
