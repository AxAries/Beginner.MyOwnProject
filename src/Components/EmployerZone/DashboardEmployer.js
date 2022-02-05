import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { Table, Divider, Tag, Button, } from "antd";
import { EditOutlined,PlusOutlined  } from '@ant-design/icons';
import Footer from "../Footer/Footer";
import Navbartop from "../Navbar/Navbartop";
import { Row, Container } from "react-bootstrap";
import "./MyStyle.css";
import axios from "axios";





function Profile(){
   




  
      const [todos, setTodos] = useState([]);


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
        <div>
          <div className="Myn">
          <h1>
            Panel
            <a href="/StrefaPracodawcy-DodajOferte">
              <Button className="add" type="primary" shape="round" icon={<PlusOutlined/>} size="large">
                Dodaj ofertę
              </Button>
            </a>
            </h1>
            </div>
      <table class="blueTable">

          <thead>
            <tr>
              <th>Tytuł</th>
              <th>Miasto</th>
              <th>Ulica</th>
              <th>Języki</th>
              <th>Działanie</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colspan="7">
                <div class="links"><a href="#">&laquo;</a> <a class="active" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">&raquo;</a></div>
              </td>
            </tr>
          </tfoot>
        <tbody>
        {users.map((user) => (
          <tr>
           <td><a href="">{user.offerText}</a></td>
            <td>{user.city}</td>
            <td>{user.street}</td>
            <td>{user.languages}</td>
            <td>
              
              <span>
                <Button className="But" type="primary" icon={<EditOutlined />} value="large" >
                Edytuj
               </Button>
               <div className="cc">
               </div>
               <Button className="But" type="primary" icon={<EditOutlined />} value="large" >
                Usuń
               </Button>
              </span>
            </td>
          </tr>
          ))}
        </tbody>
      </table>




        </div>
        </Row>
      </Container>
    </section>
    <Footer />
    </div>
  );
}

export default Profile