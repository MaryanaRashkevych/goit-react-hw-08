import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleFilterChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div className={css.container}>
            <p className={css.label}>Find contacts by name:</p>
            <input
                type="text"
                value={filter}
                className={css.input}
                onChange={handleFilterChange}
            />
        </div>
    );
}
