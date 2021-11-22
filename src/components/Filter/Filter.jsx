import s from './Filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import * as selectors from '../../redux/selectors';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';

const Filter = ({ value, filterHandler }) => {
  return (
    <InputGroup size="lg" className={s.wrapper}>
      <InputGroup.Text id="inputGroup-sizing-default">
        Find contacts by name
      </InputGroup.Text>
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        value={value}
        onChange={filterHandler}
      />
    </InputGroup>

    /*     <div className={s.wrapper}>
      Find contacts by name
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={filterHandler}
      ></input>
    </div> */
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
