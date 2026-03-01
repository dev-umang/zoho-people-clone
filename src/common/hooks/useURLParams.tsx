import { useSearchParams } from "react-router-dom";

export type URLParams = "employeeId";

export const useURLParams = () => {
  const [params, setParams] = useSearchParams();

  const updateQuery = (key: URLParams, value: string) => {
    params.set(key, value);
    setParams(params);
  };
  const getParam = (key: URLParams) => params.get(key) || "";
  const removeParam = (key: URLParams) => {
    params.delete(key);
    setParams(params);
  };
  return { getParam, setParam: updateQuery, removeParam };
};
