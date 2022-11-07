import React from 'react';
import { Link } from 'react-router-dom';

const ProductData = ({product}) => {
    const {name, _id, img, price, ratings, category, stock} = product;
  
    
    return (
        <div className=''>
            <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">{name ? name.slice(0, 15)+ '..': name}</h2>
                <p className='font-semibold'>Category: {category}</p>
                <p className='font-semibold'>Price: ${price}</p>
                <div className='flex justify-between items-center'>
                    <p>Ratings: {ratings}</p>
                    <p className='text-right'>Stock: {stock}</p>
                </div>
                <div className="card-actions mt-2">
                <Link to={`/products/${_id}`}><button className="btn btn-primary w-full">Buy Now</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProductData;