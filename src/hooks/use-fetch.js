import {useState, useEffect, useCallback} from "react";
import axios from "axios";

const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState({
    data: [],
    isLoading: true,
    error: false,
  })
  const cancelTokenSource = axios.CancelToken.source();
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      if (data) {
        setFetchedData({
          data: data.results ? data.results : data,
          isLoading: false,
          error: false,
        })
      }
    } catch (e) {
      if (axios.isCancel(e)) {
        console.log("fetching data aborted");
      } else {
        console.log("error occurred", e);
      }
      setFetchedData({
        data: [],
        isLoading: false,
        error: true,
      })
    }
  }, [url]);

  useEffect(() => {
    fetchData();
    return () => cancelTokenSource.cancel();
  }, [cancelTokenSource, fetchData, url]);
  const {data, isLoading, error} = fetchedData;
  return {data, isLoading, error};
};
export default useFetch;