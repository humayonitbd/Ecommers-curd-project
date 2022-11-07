import React from 'react';
import { Link } from 'react-router-dom';
import './AllUserProduct.css'

const AllUserProduct = ({userProduct, userAddDeleteBtn}) => {
    const { url, name, _id} = userProduct;
    return (
        <div className='my-10'>
            <div className='flex justify-between items-center w-5/12 mb-5  mx-auto shadow-xl'>
            <div className="card card-compact bg-base-100 ">
            <figure><img className='addImageSingle' src={url} alt="Shoes" /></figure>
            <div className="">
                <h3 className='btn w-full rounded-none'> {name}</h3>
                </div>
            </div>
            <div className='mr-3'>
                <button className='mr-5 btn bg-red-700' onClick={()=>userAddDeleteBtn(_id)}>Delete</button>
                <Link to={`/updatePage/${_id}`}><button className='btn btn-primary'>Update</button></Link>
            </div>

            </div>
        </div>
    );
};

export default AllUserProduct;