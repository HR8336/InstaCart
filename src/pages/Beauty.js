import React from "react";
import useFetchData from "../component/useFetchData";

const Beauty = () => {
  const { data, loading } = useFetchData();

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          {data.map((item) => (
            <span key={item.id}>{item.name}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Beauty;
