import PropTypes from 'prop-types';
import s from './ListElement.module.css';
import { connect } from 'react-redux';
import { removeItem } from '../../../redux/operations';

const ListElement = ({ name, number, deleteBtnNameAsId, deleteHandler }) => {
  return (
    <li>
      {name}: {number}
      <button
        className={s.delete}
        type="button"
        name={deleteBtnNameAsId}
        onClick={deleteHandler}
      >
        Delete
      </button>
    </li>
  );
};

ListElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteBtnNameAsId: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    //action props for Filter:
    deleteHandler: event => dispatch(removeItem(event.target.name)),
  };
};

//export default Filter;
export default connect(null, mapDispatchToProps)(ListElement);
