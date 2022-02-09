import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { Table, Divider, Tag, Button, } from "antd";
import { EditOutlined,PlusOutlined  } from '@ant-design/icons';
import Footer from "../Footer/Footer";
import Navbartop from "../Navbar/Navbartop";
import { Row, Container } from "react-bootstrap";
import "./MyStyle.css";
import axios from "axios";
import CBottons from "./buttons/buttons";




function Profile(){
   

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "email": "sss@ss",
    "password": "Kasia"
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://localhost:5001/login", requestOptions)
    .then(response => response.text())
    .then(result => {localStorage.setItem('KK', result); 
        console.log(result)})
    .catch(error => console.log('error', error));
   
  

    
    const config = {
      headers: {
          Authorization: 'Bearer ' + localStorage.getItem('KK')
      }
  };

  
   const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://localhost:5001/offers",config)
        .then((res) => res.json())
        .then((res) => setUsers(res))
        .catch((e) => console.error(e));
    }, []);


    const onDelete = async (id) => {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.status !== 200) {
            return;
          } else {
            setUsers(
              users.filter((user) => {
                return user.id !== id;
              })
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    





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
           <td><a href="/StrefaPracodawcy-kandydaci">{user.offerText}</a></td>
            <td>{user.city}</td>
            <td>{user.street}</td>
            <td>{user.languages} </td>
            <td>
              <span>
                <CBottons>
                id={1}
                onDelete={onDelete}
                
                </CBottons>
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