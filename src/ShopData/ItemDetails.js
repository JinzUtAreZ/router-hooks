import React, { useState, useEffect, Fragment } from 'react';

const ItemDetails = ({ match }) => {
  useEffect(() => {
    console.log(match);
    fetchPerItem();
  }, []);

  const [item, setItem] = useState([]);

  const fetchPerItem = async () => {
    const dataset = await fetch(
      `https://jsonplaceholder.typicode.com/photos?id=${match.params.id}`
    );

    const results = await dataset.json();
    setItem(results[0]);
    console.log(results[0]);
  };

  return (
    <Fragment>
      <h4 key={item.id}>{item.thumbnailUrl}</h4>
      <img src={item.thumbnailUrl} alt="" />
    </Fragment>
  );
};

export default ItemDetails;
