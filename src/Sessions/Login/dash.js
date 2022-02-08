import axios from "axios";
import React, { Component } from "react";


export default class home extends Component{




componentDidMount(){
    const config = {
        headers: {
            Authorization: 'Bearer' + localStorage.getItem('token')
        }
    };




    axios.get('https://localhost:5001/Login',config).then(
        res => {
            console.log(res);
        },
        err =>{
            console.log(err)
        }
    )
}


render() {
return(
<h2>Witaj tutaj</h2>


    )

    }

}