import { useSearchParams } from 'react-router';
import Input from '../common/input/Input';
import classes from './filter-bar.module.css';
import { ECategory } from '../../enums';
import CheckBox from '../common/checkbox/CheckBox';

const FilterBar = () => {
  const [params, setParams] = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const newParams = new URLSearchParams(params);
    const searchTerm = e.currentTarget.value;

    if (searchTerm.length) {
      newParams.set('searchTerm', searchTerm.trim());
    } else {
      newParams.delete('searchTerm');
    }
    setParams(newParams);
  }

  const handleCategory = (e: React.FormEvent<HTMLInputElement>) => {
    const newParams = new URLSearchParams(params);
    const checked = e.currentTarget.checked;
    const cat = e.currentTarget.name;
    if (checked) {      
      newParams.append('categories', cat);
    } else {
      newParams.delete('categories', cat);
    }
    setParams(newParams);
  }

  const selectedCats = params.getAll('categories');

  return (
    <div className={classes.wrapper}>
      <Input
        placeholder="Search for product"
        style={{ width: '250px' }}
        onChange={handleSearch}
        value={params.get('searchTerm') || ''}
        type="search"
      />
      <div className={classes.categories}>
        {
          //@ts-ignore
          Object.values(ECategory).map(entry => (
            <CheckBox
              key={entry}
              name={entry}
              label={entry}
              checked={selectedCats.includes(entry)}
              onChange={handleCategory}
            />
          ))
        }
      </div>
    </div>
  )
}

export default FilterBar;