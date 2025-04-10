import { useMemo } from "react";
import { useSearchParams } from "react-router";

const DEFAULT_VALUES = {
  searchTerm: ''
}
const useParams = () => {
  const [oldParams, setParams] = useSearchParams();

  const params = useMemo(() => ({
    categories: oldParams.getAll('categories'),
    searchTerm: oldParams.get('searchTerm') || DEFAULT_VALUES.searchTerm
  }), [oldParams]);

  const setParam = (name: string, value: any) => {
    const newParams = new URLSearchParams(oldParams);

    newParams.delete(name);

    if (Array.isArray(value)) {
      value.forEach(item => newParams.append(name, item))
    } else {
      if (value !== DEFAULT_VALUES.searchTerm) {
        newParams.set(name, value.trim());
      } else {
        newParams.delete(name);
      }
    }

    setParams(newParams);
  }

  return {
    params,
    setParam
  }
}

export default useParams;