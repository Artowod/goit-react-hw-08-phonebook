import PropTypes from 'prop-types';
import s from './ListElement.module.css';
import { connect } from 'react-redux';
import { removeItem } from '../../../redux/operations';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListElement = ({ name, number, deleteBtnNameAsId, deleteHandler }) => {
  return (
    <li className={s.element}>
      <div>
        <span className={s.name}>{name}:</span> {number}
      </div>
      <Button
        className={s.delete}
        type="button"
        name={deleteBtnNameAsId}
        onClick={deleteHandler}
        variant="outline-danger"
        size="sm"
      >
        Delete
      </Button>
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
