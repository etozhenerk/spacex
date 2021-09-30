import { useEffect, useState } from "react";
import FetchData from "../../service/FetchData";

const fetchData = new FetchData();

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getData = async () => {
      try {
        const launches = await fetchData.getLaunches();
        setData(launches);
      } catch (err) {
        setError(err);
      }
    };
    getData();
  }, []);
  const getLaunch = (id) => data.find(item => item.id === id);

  return { data, error, getLaunch };
};