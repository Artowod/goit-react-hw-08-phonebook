import s from './Filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import * as selectors from '../../redux/selectors';

const Filter = ({ value, filterHandler }) => {
  return (
    <div>
      Find contacts by name
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={filterHandler}
      ></input>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    //state props for Filter:
    value: selectors.getFilter(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    //action props for Filter:
    filterHandler: event => dispatch(changeFilter(event.target.value)),
  };
};

//export default Filter;
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
