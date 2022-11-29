import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Home = () => {
  const params = useParams();
  const [data, setData] = useState({});
  console.log(params);

  const getDataById = async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setData(response.data);
  };

  useEffect(() => {
    getDataById(params.id);
  }, []);
  return (
    <div>
      {data && (
        <div>
          <img src={data.image} alt=""/>
          <div style={{fontSize : 20 , alignItems : "center"}}>
          <div>{data.brand}</div>
          <div>{data.price}</div>
          <div>{data.discountPercentage}</div>
          <div>{data.title}</div>
          <div>{data.category}</div>
          <div>{data.stock}</div>
          <div>{data.description}</div>
          <div>{data.thumbnail}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
