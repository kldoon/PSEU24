import Input from '../common/input/Input';
import classes from './filter-bar.module.css';
import { ECategory } from '../../enums';
import CheckBox from '../common/checkbox/CheckBox';
import useParams from '../../hooks/params.hook';

const FilterBar = () => {
  const { params, setParam } = useParams();

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const searchTerm = e.currentTarget.value;
    setParam('searchTerm', searchTerm);
  }

  const handleCategory = (e: React.FormEvent<HTMLInputElement>) => {
    let selectCats = params.categories;
    const checked = e.currentTarget.checked;
    const cat = e.currentTarget.name;

    if (checked) {
      selectCats.push(cat);
    } else {
      selectCats = selectCats.filter(c => c !== cat);
    }

    setParam('categories', selectCats);
  }

  return (
    <div className={classes.wrapper}>
      <Input
        placeholder="Search for product"
        style={{ width: '250px' }}
        onChange={handleSearch}
        value={params.searchTerm}
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
              checked={params.categories.includes(entry)}
              onChange={handleCategory}
            />
          ))
        }
      </div>
    </div>
  )
}

export default FilterBar;