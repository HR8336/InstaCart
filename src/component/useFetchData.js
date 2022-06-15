import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
        );
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
    console.log(data);
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchData;
