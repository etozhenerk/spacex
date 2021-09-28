import { useEffect, useState } from "react";
import FetchData from "../../service/FetchData";


const fetchData = new FetchData();
export const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getData = async () => {
      try {
        const json = await fetchData.getLaunches();
        setData(json);
      } catch (err) {
        setError(err);
      }
    };
    getData();
  }, []);

  return { data, error };
};