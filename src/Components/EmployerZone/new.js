import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        person:[],
    };

    componentDidMount() {
        axios.get('https://localhost:5001/offers').then(res => {
            console.log(res);
            this.setState({ persons: res.data});
        });
        
    }



    

}

