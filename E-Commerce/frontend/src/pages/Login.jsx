import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../App';


function Login() {

    const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const loginUser = async(e) => {
        e.preventDefault();
        try {
            const resData = await fetch(`/user/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })
            // .then((res) => res.json())
            // if (!resData.success) throw new Error(resData.message);
            if(resData.status == 401){
                alert("Invalid Email or Password")
            }
            else if(resData.status == 402){
                alert('Please fill all the fields')
            }
            else if(resData.status == 201){
                dispatch({type:"USER", payload: true})
                alert('User LoggedIn Successfully')
                navigate('/')
                // window.location.replace("/");
                // history.push('/')
            }else{
                alert('Something went wrong!')
            }
            
        } catch (error) {
            console.log("Something went wrong during login")
        }
    }



    return (
        <section className='relative flex items-top justify-center min-h-[700px] bg-gray-50 sm:items-center sm:pt-0'>
            <div className='max-w-6xl mx-auto sm:px-6 lg:px-8 sm:text-xl '>
                <div className='shadow grid grid-cols-1 md:grid-cols-2 p-6 gap-6 rounded-lg max-w-screen-xl bg-white'>
                    <div className="p-6 bg-gray-100 rounded-lg h-auto ">
                    <div className= "w-full h-full flex flex-col justify-center items-center gap-6">
                        <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                    </div> 
                    </div>
                    <form method='POST' className="p-6 flex flex-col justify-center border rounded-lg ">
                        <div className=' ml-6 pb-4 font-extrabold text-2xl flex items-start'>
                          <h1>Log in</h1>
                        </div>
                        <div className="flex gap-2">
                        <div className='flex justify-center items-center w-4 text-2xl'>
                            <i class="zmdi zmdi-email zmdi-hc-1x"></i>
                        </div>
                        <div className='flex flex-col w-full'>
                          <label for="email" className="hidden">
                              Email
                          </label>
                          <input
                              type="email"
                              name="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Your Email"
                              className="w-100 mt-2 py-2 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold text-[.8rem] focus:border-orange-500 focus:outline-none"
                          />
                        </div>
                        </div>
                        <div className='flex gap-2'>
                        <div className='flex justify-center items-center w-4 text-2xl'>
                            <i class="zmdi zmdi-lock zmdi-hc-1x"></i>
                        </div>
                      <div className="flex flex-col w-full">
                        <label for="password" className="hidden">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-100 mt-2 py-2 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold text-[.8rem] focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                        </div>
                        <button
                            type="submit"
                            onClick={loginUser}
                            className=" ml-6 md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-1.5 px-4 rounded-lg mt-6 text-[1rem] hover:bg-orange-600 transition ease-in-out duration-300"
                        >
                            Login
                        </button>
                        <div className='flex pl-6 text-[1rem] mt-6'>
                            <p>Not registered?&nbsp;</p>
                            <Link
                            to={'/register'}
                            className='hover:text-black hover:underline font-semibold'
                            >
                              Register here
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login