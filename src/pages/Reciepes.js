import React, { useState, useEffect } from "react";
import axios from "axios";
import { GridBox } from "../css/CssComponent";

const Reciepes = () => {
  const [storeData, setStoreData] = useState([]);
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: "20", tags: "under_30_minutes" },
    headers: {
      "X-RapidAPI-Key": "8d4b99f80emsh7b77fb4099084bep11175bjsnca454bc0a5ec",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results, "dataOfApi");
        setStoreData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return storeData.map((data, index) => (
    <GridBox
      key={index}
      className="card mb-4 mt-5"
      style={{ width: "25rem", border: "solid black" }}
    >
      <img
        src={data.thumbnail_url}
        alt="icons"
        style={{
          height: "150px",
          width: "150px",
          borderRadius: "60px",
          marginLeft: "108px",
        }}
      />
      <h1>{data.name}</h1>
      <h4>{data.price}</h4>
      <span>{data.description}</span>{" "}
    </GridBox>
  ));
};

export default Reciepes;
