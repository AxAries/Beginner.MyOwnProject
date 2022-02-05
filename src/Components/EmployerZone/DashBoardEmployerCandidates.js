import "antd/dist/antd.css";
import { Table, Divider, Tag, Button } from "antd";
import { EditOutlined  } from '@ant-design/icons';
import Footer from "../Footer/Footer";
import Navbartop from "../Navbar/Navbartop";
import { Row, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import User from "./Candidates/Users";
import AddUser from './Candidates/AddUser';

const columns = [
    {
      title: "Tytuł",
      dataIndex: "name",
      key: "name",
      render: text => <a href="javascript:;">{text}</a>
    },
    {
      title: "Aplikacje",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Status",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      )
    },
    {
      title: "Działanie",
      key: "action",
      render: (text, record) => (
        <span>
        <Button type="primary" icon={<EditOutlined />} value="large" >
          Edytuj
        </Button>
        </span>
        
      )
    }
  ];
  
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"]
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"]
    }
  ];




  





function Profile(){

const [users, SetUsers] = useState([]);
useEffect(() => {
fetchData();
},[])

const fetchData = async () => {
  await fetch('https://localhost:5001/offers')
  .then((res) => res.json())
  .then((data) => SetUsers(data))
  .catch((err) => {
    console.log(err)
  })
}

const onAdd = async (offerText, city, street,SalaryFrom,SalaryTo) => {
  await fetch("https://localhost:5001/offers", {
    method: "POST",
    body: JSON.stringify({
      offerText: offerText,
      city:city,
      street:street,
      SalaryFrom:SalaryFrom,
      SalaryTo:SalaryTo,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      if (res.status !== 201) {
        return;
      } else {
        return res.json();
      }
    })
    .then((data) => {
      SetUsers((users) => [...users, data]);
    })
    .catch((err) => {
      console.log(err);
    });
};





console.log(users)
return (

<div>
<Navbartop />
<section style={{ backgroundColor: "#eee" }}>
  <Container className="justify-content-center align-items-center py-5">
    <Row className="justify-content-around align-items-top">
    <Table columns={columns} dataSource={data} bordered />,
    <div>
    <AddUser onAdd={onAdd} />
      {
        users.map((user) => (
          <User offerText={user.offerText} city={user.city} street={user.street}/>
        ))
      }
    </div>
    </Row>
  </Container>
</section>
<Footer />
</div>


  );
}

export default Profile