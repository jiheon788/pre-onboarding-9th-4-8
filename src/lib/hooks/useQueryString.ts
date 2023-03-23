import { useSearchParams } from 'react-router-dom';
import { paramsKeyType } from '@/interface/main';
import { PARAMS_KEY } from '@/constants/config';

const useQueryString = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParams = (key: paramsKeyType) => {
    if (key === 'page') return searchParams.get(key) || '1';
    return searchParams.get(key) || '';
  };

  const setParams = (key: paramsKeyType, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
    window.scrollTo(0, 0);
  };

  const deleteParams = (key: paramsKeyType) => {
    searchParams.delete(key);
    setSearchParams(searchParams);
    window.scrollTo(0, 0);
  };

  const deleteAllParams = () => {
    PARAMS_KEY.forEach((key) => searchParams.delete(key));
    setSearchParams(searchParams);
    window.scrollTo(0, 0);
  };

  return {
    getParams,
    setParams,
    deleteParams,
    deleteAllParams,
  };
};

export default useQueryString;
