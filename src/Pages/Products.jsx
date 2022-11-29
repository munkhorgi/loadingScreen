import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Users from "./Users";
import Lo from "./Spinner";
const Products = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const instance = axios.create({
    baseURL: "https://dummyjson.com/products",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const getData = async () => {
    setIsLoading(true);
    const rosponse = await instance.get();
    setData(rosponse.data.products);
    setIsLoading(false);
  };
  const getDataById = async () => {
    const rosponse = await instance.get(`/${id}`);
    setData([rosponse.data]);
  };
  const handleDelete = async () => {
    const rosponse = await instance.delete(`products/${id}`)
        .then(res => {
            setData((prev) => prev.filter((el) => el.id !== res.data.id))
        })
        .catch(error => {
            console.log(error);
        })

};
const newProducts = {
    title: 'iphone 9plus',
}
const handleUpdate = async () => {
    const response = await instance.patch(`products/${id}`, newProducts)
        .then(res => {
            console.log("UPDATED SUCCESS", res.data);
            console.log(data);
            setData(() => data.map((el) => {
                if (el.id === Number(res.data.id)) el.title = res.data.title;
                return el
            }))
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
}
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input
        id="input"
        type="text"
        onChange={(e) => setId(e.target.value)}
      ></input>
      <Button onClick={getDataById}>get</Button>
      <Button onClick={handleDelete}>Delete</Button>
      <Button onClick={handleUpdate}>Update</Button>
      <div className="grid-container">
        {data && isLoading ? (
          <Lo />
        ) : (
          data.map((user) => {
            return (
              <div>
                <Users user={user} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Products;
