import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {
    const {user, logOutAccount} = useContext(AuthContext)
const handlerLogOut=()=>{
    logOutAccount()
    .then(()=>{
        alert('log out successfull!!')
    })
    .catch(err=>{
        console.log(err)
        alert(err.message)
    })
}

    return (
        <div className='bg-base-300'>
           <div className="navbar w-10/12 mx-auto">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
    <span>{user?.email && user?.email}</span>
  </div>
  <div className="flex-none gap-2">
    <ul className='lg:flex hidden lg:block'>
        <li className='mr-16'><Link to='/'>Home</Link></li>
        <li className='mr-16'><Link to='/about'>About</Link></li>
        <li className='mr-16'><Link to='/addProduct'>Add-Product</Link></li>
        <li className='mr-16'><Link to='/allAddProduct'>All-Add-Product</Link></li>
        
        {user?.email && <li className='mr-16'><Link to='/orders'>Orders</Link></li>}
        { user && user?.uid ?  <li className='mr-16' onClick={handlerLogOut}><Link >Log out</Link></li> :
        <>
        <li className='mr-16'><Link to='login'>Login</Link></li>
        <li className='mr-16'><Link to='/register'>Register</Link></li>
        </>
        }
    </ul>
    <div className="dropdown lg:hidden dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
      <li className='mr-16'><Link to='/'>Home</Link></li>
        <li className='mr-16'><Link to='/about'>About</Link></li>
        <li className='mr-16'><Link to='/orders'>Orders</Link></li>
        { user && user?.uid ?  <li className='mr-16' onClick={handlerLogOut}><Link >Log out</Link></li> :
        <>
        <li className='mr-16'><Link to='login'>Login</Link></li>
        <li className='mr-16'><Link to='/register'>Register</Link></li>
        </>
        }
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;