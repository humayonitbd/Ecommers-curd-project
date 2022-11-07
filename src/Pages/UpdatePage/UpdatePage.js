import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UpdatePage = () => {
    const productSingle = useLoaderData()

    const updateProductHandler=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        console.log(name, url)
        const updateProduct ={
            name: name,
            url: url
        }

        fetch(`http://localhost:5000/addProductsAdd/${productSingle._id}`, {
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateProduct)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.success){
                alert(data.message)
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
      <h1 className="text-5xl font-bold">Update Product now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={updateProductHandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Category</span>
          </label>
          <input type="text" name='name' defaultValue={productSingle.name} placeholder="name category" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product-URL</span>
          </label>
          <input type="text" defaultValue={productSingle.url} name='url' placeholder="type url" className="input input-bordered" required/>
        </div>
        
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Update-Product</button>
        </div>
        <p>You already add product? <Link className='text-red-600' to='/allAddProduct'>adding-page</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default UpdatePage;