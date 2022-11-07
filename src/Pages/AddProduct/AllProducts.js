import React, { useContext, useEffect, useState } from 'react';

import SingleProduct from './SingleProduct';

const AllProducts = () => {
    const [addProducts, setAddProducts] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/addProducts`)
        .then(res =>res.json())
        .then(data =>{
            setAddProducts(data)
        })
    },[])



    return (
        <div>
            <div className='my-10'>
                <h4 className='text-red-600 font-bold text-lg'>All Add Products</h4>
                <p className='font-bold text-3xl'>Our product is best product </p>
                <p className=' mx-auto my-3 lg:w-8/12 md:w-8/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laudantium pariatur recusandae odit aspernatur possimus consectetur vel in temporibus corporis?</p>
            </div>
            <div className='mx-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
            {
                addProducts.map(singleProduct => <SingleProduct key={singleProduct._id} singleProduct={singleProduct}></SingleProduct>)
            }
        </div>
        </div>
    );
};

export default AllProducts;