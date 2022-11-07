import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import OrdersDetails from './OrdersDetails';

const Orders = () => {
    const {user, logOutAccount} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    // const naviget = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
        headers:{
            authorization: `Bearer ${localStorage.getItem('curd-project')}`
        }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
            //    naviget('/login')
               return logOutAccount();
               
            }
           return res.json();
        })
        .then(data =>{
            setOrders(data)
            // console.log(data)
        })
    },[user?.email, logOutAccount])
    console.log(orders)


    const deleteHandler=(id)=>{
        fetch(`http://localhost:5000/orders/${id}`, {
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.success){
                alert(data.message)
                const remaining = orders.filter(order => order._id !== id)
                setOrders(remaining)
            }else{
                alert(data.error)
            }
        })

    }

    const handlerUpdatebtn = (id)=>{
        fetch(`http://localhost:5000/orders/${id}`, {
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status: 'Approvod'})
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                const remaining = orders.filter(ord => ord._id !== id)
                const approved = orders.find(ord =>ord._id === id)
                approved.status = 'approved'
                const newProduct = [approved, ...remaining]
                setOrders(newProduct)
                alert("product aproved!!")

            }
            
        })

    }

    return (
        <div>
            {
                orders?.map(order => <OrdersDetails key={order._id} order={order} handlerUpdatebtn={handlerUpdatebtn} deleteHandler={deleteHandler}></OrdersDetails>)
            }
        </div>
    );
};

export default Orders;