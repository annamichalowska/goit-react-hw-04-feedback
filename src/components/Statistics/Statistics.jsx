import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ name }) => {
  return <div className={css.box}>Tutaj będą statystyki {name}</div>;
};

Statistics.propTypes = { name: PropTypes.string.isRequired };
