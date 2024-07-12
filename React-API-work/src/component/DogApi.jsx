import axios from "axios";
import React, { useEffect, useState } from "react";

function DogApi() {
  const [data, setData] = useState([]);

  const handleDog = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setData([response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Dog API</h2>
      {data.map((item, index) => {
        const { message, status } = item;
        return (
          <div key={index} className="box">
            <img src={message} alt="" className="dogimg" />
          </div>
        );
      })}{" "}
      <br />
      <button onClick={handleDog}>click me</button>
    </>
  );
}

export default DogApi;
