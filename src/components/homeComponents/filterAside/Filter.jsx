import { useDispatch } from "react-redux";
import { filterHandle } from '../../../features/filter/filterSlice';

const Filter = () => {

  const dispatch = useDispatch();
  const handleRadio = (value) => {
    dispatch(filterHandle(value))
  }
  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        {/* handle filter on button click  */}
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            className="radio"
            onClick={() => handleRadio('All')}
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input type="radio" name="filter" id="lws-saved" className="radio" onClick={() => handleRadio('Saved')} />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
