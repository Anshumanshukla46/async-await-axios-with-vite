import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

export default function App() {

  const [title, setTitle] = useState();

  useEffect(() => {
    console.log("hello1");
    async function fetchData() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");

        setTitle(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    console.log("hello2");
  }, []);

  const tableRow = title && title.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>
        <img src={item.image} width="50px" height="50px" alt="product" />
      </td>
      <td>{item.description}</td>
    </tr>
  ));


  console.log("here");
  return (
    <div>
      <table border="2" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {tableRow}
        </tbody>

      </table>
    </div>
  )
}
