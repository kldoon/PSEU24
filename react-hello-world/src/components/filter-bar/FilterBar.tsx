import { useSearchParams } from 'react-router';
import Input from '../common/input/Input';
import classes from './filter-bar.module.css';

const FilterBar = () => {
  const [params, setParams] = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const newParams = new URLSearchParams();
    const searchTerm = e.currentTarget.value;

    newParams.append('searchTerm', searchTerm);
    setParams(newParams);
  }

  return (
    <div className={classes.wrapper}>
      <Input
        placeholder="Search for product"
        style={{ width: '250px' }}
        onChange={handleSearch}
      />
    </div>
  )
}

export default FilterBar;