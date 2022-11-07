import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const ConfromPage = () => {
    const product = useLoaderData();
    const {name, _id, img, price, ratings, category, stock} = product;
    const {user} = useContext(AuthContext);
    const orderConformBtn=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = `${form.fname.value} ${form.sname.value}`;
        const phone = form.phone.value;
        const message = form.message.value;
        const email = form.email.value;

        const orders = {
            productId: _id,
            name: name,
            phone: phone,
            email: `${user?.email && email}`,
            message,
            price,
            
        }

        fetch('http://localhost:5000/orders', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(orders)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.success){
                alert(data.message)
            }else{
                alert(data.error)
            }
        })
        console.log(orders)


    }
    return (
        <div className='w-10/12 mx-auto'>
            <div className=' my-10'>
            <div className="flex shadow-xl">
            <figure><img className='w-36 mr-5' src={img} alt="Movie"/></figure>
            <div className="text-start">
                <h2 className="card-title">{name}</h2>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
                <div className='flex justify-between items-center'>
                    <p>Ratings: {ratings}</p>
                    <p className='text-right'>Stock: {stock}</p>
                </div>
            </div>
            </div>
        </div>
            <form onSubmit={orderConformBtn} className='mt-20'>
                <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-10'>
                <input type="text" name='fname' placeholder="Frist Name" className="input input-bordered w-full " />
                <input type="text" name='sname' placeholder="Type Last Name" className="input input-bordered w-full " />
                <input type="number" name='phone' placeholder="phone number type" className="input input-bordered w-full " />
                <input type="email" name='email' placeholder="Type email" defaultValue={user?.email} readOnly className="input input-bordered w-full " />
                </div>
                <textarea name='message' className="textarea w-full h-36 mt-10 textarea-bordered" placeholder="Bio"></textarea>
                <div>
                    <button type='submit' className='btn btn-primary w-full my-5'>Buy Now</button>
                </div>
            </form>
        </div>
    );
};

export default ConfromPage;