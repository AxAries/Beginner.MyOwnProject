import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { Table, Divider, Tag, Button } from "antd";
import { EditOutlined  } from '@ant-design/icons';
import Footer from "../Footer/Footer";
import Navbartop from "../Navbar/Navbartop";
import { Row, Container } from "react-bootstrap";
import "./MyStyle.css";
import axios from "axios";
import Personlist from './new';

const columns = [
    {
      title: "Tytuł",
      dataIndex: "name",
      key: "name",
      render: text => <a href="javascript:;">{text}</a>
    },
    {
      title: "Aplikacje",
      dataIndex: "number",
      key: "age"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    },
    {
        title: "Data dodania",
        dataIndex: "dateadd",
        key: "dateadd"
    },
    {
      title: "Działanie",
      key: "action",
      render: (text, record) => (
        <span>
        <Button className="But" type="primary" icon={<EditOutlined />} value="large" >
          Edytuj
        </Button>
        <Button className="But" type="primary" icon={<EditOutlined />} value="large" >
          Usuń
        </Button>
        </span>
        
      )
    }
  ];
  
  const data = [
    {
      key: "1",
      name: "Junior Python Engineer",
      number: 32,
      status: "Aktywny",
      dateadd: "28.10.2022",
      tags: ["HTML", "JavaScript"]
    },
    {
      key: "2",
      name: "Junior React Engineer",
      number: 42,
      status: "Aktywny",
      dateadd: "28.10.2022",
      tags: ["Javascript"]
    },
    {
      key: "3",
      name: "Front-end Developer",
      number: 32,
      status: "Nieaktywny",
      dateadd: "28.10.2022",
      tags: ["C#", "C++"]
    }
  ];





function Profile(){
   

      const [todos, setTodos] = useState([]);

      useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/todos")
          .then(response => setTodos(response.data));
      }, []);

    const getQuote = () => {
      axios.get('https://localhost:5001/offers')
      .then(res => {
        console.log(res)
      })
    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://localhost:5001/offers")
        .then((res) => res.json())
        .then((res) => setUsers(res))
        .catch((e) => console.error(e));
    }, []);



return (
    <div>
    <Navbartop />
    <section style={{ backgroundColor: "#eee" }}>
      <Container className="justify-content-center align-items-center py-5">
        <Row className="justify-content-around align-items-top">
        <Table columns={columns} dataSource={data} bordered />
        <div>
        
        {users.map((user) => (
        <div>
          {user.name}
        </div>
      ))}

<button onClick={getQuote}> Kliknij</button>

        </div>
        </Row>
      </Container>
    </section>
    <Footer />
    </div>
  );
}

export default Profile