import React from 'react';
import './SingleProduct.css'

const SingleProduct = ({singleProduct}) => {
    const { name, url} = singleProduct;
    // console.log(singleProduct)
    return (
        <div className=''>
            <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='addImage' src={url} alt="Shoes" /></figure>
            <div className="">
                <h3 className='btn w-full rounded-none'> {name}</h3>
                </div>
            </div>
            </div>
           
    );
};

export default SingleProduct;