import React from 'react';
import { useContext } from 'react';
import { json, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { jwtHandler } from '../../Utilitis/Utilitis';

const Login = () => {
  const {logInAccount} = useContext(AuthContext)
  const naviget = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
        const loginHandler=(e)=>{
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log( email, password)
            logInAccount(email, password)
            .then(result =>{
              const user = result.user;
              // console.log(user)
              jwtHandler(user);

              alert('login successfull!!')
              form.reset()
              naviget(from, {replace: true})
            })
            .catch(err =>{
              console.log(err)
              alert(err.message)
            })

                
        }
        return (
            
            <div>
              <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={loginHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
              <label className="label">
                <Link className="label-text-alt link link-hover">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">login</button>
            </div>
            <p>are you new user? <Link to='/register'>register</Link></p>
          </form>
        </div>
      </div>
    </div>
            </div>
    );
};

export default Login;