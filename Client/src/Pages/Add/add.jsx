import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Formikk from "../../Components/Formik";
import axios from "axios";

const Add = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [property, setProperty] = useState(null);
  async function getData() {
    const res = await axios("http://localhost:4000");
    setData(res.data);
  }
  async function deleteData(id) {
    const res = await axios.delete(`http://localhost:4000/${id}`);
    getData();
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <Formikk getData={getData} />
      <div className="filter">
        <input
          type="search"
          value={search}
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setProperty(null)}>
          Default
        </button>
        <button onClick={() => setProperty({ name: "title", asc: true })}>
          A-Z
        </button>
        <button onClick={() => setProperty({ name: "title", asc: false })}>
          Z-A
        </button>
        <button onClick={() => setProperty({ name: "price", asc: true })}>
          inc
        </button>
        <button onClick={() => setProperty({ name: "price", asc: false })}>
          dec
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>title</th>
            <th>info</th>
            <th>image2</th>
            <th>author</th>
            <th>price</th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data
              .filter((x) =>
                x.title.toLowerCase().includes(search.toLowerCase())
              )
              .sort((a, b) => {
                if (property && property.asc === true) {
                  return a[property.name] < b[property.name]
                    ? -1
                    : b[property.name] < a[property.name]
                    ? 1
                    : 0;
                } else if (property && property.asc === false) {
                  return a[property.name] > b[property.name]
                    ? -1
                    : b[property.name] < a[property.name]
                    ? 1
                    : 0;
                } else {
                  return 0;
                }
              })

              .map((x) => (
                <tr>
                  <td>
                    <img src={x.image} alt="" />
                  </td>
                  <td>{x.title}</td>
                  <td>{x.info}</td>
                  <td>
                    <img src={x.image2} alt="" />
                  </td>
                  <td>{x.author}</td>
                  <td>${x.price}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Add;
