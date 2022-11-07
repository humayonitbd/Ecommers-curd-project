import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import AllUserProduct from './AllUserProduct';

const AllAddProduct = () => {
    const {user} = useContext(AuthContext);
    const [userProducts, setUserProducts] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/addProductsAdd?email=${user?.email}`)
        .then(res =>res.json())
        .then(data =>{
            setUserProducts(data)
        })
    },[user?.email])
    console.log(userProducts)

    const userAddDeleteBtn =(id)=>{
        fetch(`http://localhost:5000/addProductsAdd/${id}`,{
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.success){
                alert(data.message)
                const remainProduct = userProducts.filter(uproduct => uproduct._id !== id)
                setUserProducts(remainProduct)
            }else{
                alert(data.error)
            }
        })
    }
    
    return (
        <div>
           {
            userProducts.map(userProduct => <AllUserProduct key={userProduct._id} userProduct={userProduct} userAddDeleteBtn={userAddDeleteBtn}></AllUserProduct>)
           }
        </div>
    );
};

export default AllAddProduct;