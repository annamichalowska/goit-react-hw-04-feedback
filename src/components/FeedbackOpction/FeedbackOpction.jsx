import PropTypes from 'prop-types';
import css from './FeedbackOpction.module.css';

export const FeedbackOpction = ({ name }) => {
  return <div className={css.box}>Tutaj będą przyciski {name}</div>;
};

FeedbackOpction.propTypes = { name: PropTypes.string.isRequired };
