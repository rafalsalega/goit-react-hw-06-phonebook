import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onChange }) => (
  <>
    <p className={css.item}>Find contact by name</p>
    <input type="text" placeholder="Search contacts" onChange={onChange} />
  </>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};