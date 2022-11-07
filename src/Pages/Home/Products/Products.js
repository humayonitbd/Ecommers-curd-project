import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductData from './ProductData';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(15);
    console.log(count)


    const pages = Math.ceil(count / size);

    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
        .then(res=>res.json())
        .then(data =>{
            setProducts(data.products)
            setCount(data.count)
        })
    },[page, size])
    // console.log(products)


    return (
        <div className='my-16 mx-3'>
            <div>
                <h2 className='text-xl font-bold text-red-600'>Product Services</h2>
                <h2 className='text-3xl font-semibold my-3'>Our product collection si best collection!</h2>
                <p className='md:w-9/12 lg:w-6/12 mx-auto mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dignissimos recusandae magnam quis neque quas ducimus fugiat dolores odit mollitia!</p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6'>
           {
            products.map(product => <ProductData key={product._id} product={product}></ProductData>)
           }
        </div>
        <div className='pagination'>
            <p>page number is : {page} and size: {size}</p>
            {
                [...Array(pages).keys()].map(number => <button className={page === number ? 'btn bg-red-600 mr-2' : 'btn mr-2'} onClick={()=>setPage(number)} key={number}>
                    {number + 1}
                </button>)
            }
            <select className='btn bg-red-700' onClick={(e)=>setSize(e.target.value)}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15" selected>15</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </div>
        </div>
    );
};

export default Products;