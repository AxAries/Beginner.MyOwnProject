import React from 'react';
import '../MyStyle.css';
import {  Button } from "antd";
import { EditOutlined  } from '@ant-design/icons';


const User = ({id,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        
            <span>
            <Button className="But" type="primary" icon={<EditOutlined />} value="large" >
                Edytuj
               </Button>
               <div className="cc">
               </div>
               <Button className="But" type="primary" icon={<EditOutlined />} value="large" onClick={handleDelete}>
                Usuń
               </Button>
            </span>
        
    )
}

export default User
