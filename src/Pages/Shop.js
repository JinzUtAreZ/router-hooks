import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const dataset = await fetch('https://jsonplaceholder.typicode.com/photos');
    const results = await dataset.json();
    //console.log(results);
    setItems(results);
  };

  return (
    <Fragment>
      {items.map((item) => (
        <h4 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.title.toUpperCase()}</Link>
        </h4>
      ))}
    </Fragment>
  );
};

export default Shop;
