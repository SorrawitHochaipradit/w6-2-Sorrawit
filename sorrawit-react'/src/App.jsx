import React, { useEffect, useState } from "react";
import { Card, Image, Col } from "antd";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((apiData) => setData(apiData.products));
  }, []);
  return (
    <div>
      <h1>API Data</h1>
      {data.map((item, index) => {
        return (
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card key={index} title={index.title}>
              <Image src={item.images} />
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </Card>
          </Col>
        );
      })}
    </div>
  );
}

export default App;
