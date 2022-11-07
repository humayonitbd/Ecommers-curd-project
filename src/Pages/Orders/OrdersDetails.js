import { data } from 'autoprefixer';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const OrdersDetails = ({order, deleteHandler, handlerUpdatebtn}) => {
    const {name, _id, img, price, ratings, status, category, productId} = order;
    const [productimg, setProductimg] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/products/${productId}`)
        .then(res =>res.json())
        .then(data=>{
            setProductimg(data)
        })
    },[productId])
    // console.log(productimg)

    


    return (
    
        <div className=' w-10/12 mx-auto my-10'>
            <div className='flex justify-between  items-center shadow-xl pr-5'>
            <div className="flex">
            <figure><img className='w-36 mr-5' src={productimg.img} alt="img"/></figure>
             <div className="text-start">
                <h2 className="card-title">{name}</h2>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
             </div>
            </div>
            <div className=''>
            <button onClick={()=>deleteHandler(_id)} className='btn bg-red-700'>delete</button>
            <button onClick={()=>handlerUpdatebtn(_id)} className='ml-3 btn btn-primary'>{status ? status : 'pending'}</button>
            </div> 

            </div>
           
        </div>
    );
};

 

export default OrdersDetails;