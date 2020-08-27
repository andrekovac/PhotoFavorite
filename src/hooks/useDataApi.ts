import { useState, useEffect, useRef } from "react";

import { ItemT } from "../components/Item";

/**
 * Adapted from https://www.robinwieruch.de/react-hooks-fetch-data
 *
 * See section "Custom Data Fetching Hook" for an explanation and comments about this hook.
 */
const useDataApi = (initialData: ReadonlyArray<ItemT>, initialUrl: string) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const isInitialMount = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(url);

        const data = await response.json();
        setData(data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // Is only run on update, not on initial mount
      fetchData();
    }
  }, [url]);

  return [{ data, isLoading, isError }, setUrl] as const;
};

export default useDataApi;
