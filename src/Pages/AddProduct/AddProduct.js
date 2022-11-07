import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import AllAddProduct from '../AllAddProduct/AllAddProduct';
import AllProducts from './AllProducts';
import SingleProduct from './SingleProduct';

const AddProduct = () => {
    const {user} = useContext(AuthContext)
   
    const addProductHandler=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const addProduct = {
            name: name,
            url: url,
            email: user.email
        }
        fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(addProduct)

        })
        .then(res =>res.json())
        .then(data =>{
            if(data.success){
                alert(data.message)
                form.reset();
                
            }else{
                alert(data.error)
            }
        })


            
    }
    return (
        
        <div>
          <div className="hero bg-base-200 py-10">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Add Product now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={addProductHandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Category</span>
          </label>
          <input type="text" name='name' placeholder="name category" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product-URL</span>
          </label>
          <input type="text" name='url' placeholder="type url" className="input input-bordered" required/>
        </div>
        
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Add-Product</button>
        </div>
        <p>You already add product? <Link className='text-red-600' to='/allAddProduct'>adding-page</Link></p>
      </form>
    </div>
  </div>
</div>
        <div>
            <AllProducts></AllProducts>
        </div>
        </div>
    );
};

export default AddProduct;