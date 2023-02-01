import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ name }) => {
  return <div className={css.box}>Tutaj będzie sekcja {name}</div>;
};

Section.propTypes = { name: PropTypes.string.isRequired };
