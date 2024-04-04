import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    })

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setFormData({...formData, [name]:value})
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {fullName, email, phoneNumber, work, password, confirmPassword, username} = formData;
        if(password !== confirmPassword){
            alert("Passwords do not match")
        }
        else{
            try {
                const resData = await fetch(`/user/api/register`,
                    {method: "POST",
                        headers:{
                            "Content-Type": "application/json"
                            },
                        body: JSON.stringify({fullName, email, phoneNumber, work, password, confirmPassword, username})
                    }
                )
                // .then((res)=> res.json())
                // .catch((error)=>{console.log(error)})
                // console.log(resData);
                if(resData.status == 401){
                    // console.log("User already exists")
                    alert("User already exists")
                }
                else if(resData.status == 402){
                    alert('Please fill all the fields')
                }
                else if(resData.status == 500){
                    // console.log("Something went wrong while registering new user")
                    alert("Something went wrong while registering new user")
                }
                else if(resData.status == 201){
                    console.log("Registration Successful")
                    alert("Registration Successful")
                    window.location.replace("/login");
                }
            } catch (error) {
                console.log(`Something went wrong while registering!! ${error}`)
            }
        }
    }

  return (
    <section className='relative flex items-top justify-center min-h-[700px] bg-gray-50 sm:items-center sm:pt-0'>
        <div className='max-w-6xl mx-auto sm:px-6 lg:px-8 sm:text-xl'>
            <div className='shadow grid grid-cols-1 md:grid-cols-2 p-6 gap-6 rounded-lg  bg-white'>
                <form method='POST' className="p-6 flex flex-col justify-center border rounded-lg ">
                    <div className=' ml-6 pb-4 font-extrabold text-2xl flex items-start'>
                      <h1>Sign up</h1>
                    </div>
                    <div className="flex gap-2 gap">
                        <div className='flex justify-center items-center w-4 text-2xl'>
                            <i class="zmdi zmdi-account zmdi-hc-1x"></i>
                        </div>
                        <div className='flex flex-col w-full'>
                          <label for="name" className="hidden">
                              Full Name
                          </label>
                          <input
                              type="fullName"
                              name="fullName"
                              id="name"
                              value = {formData.fullName}
                              onChange={handleInputs}
                              placeholder="Full Name"
                              className="w-100 mt-2 py-2 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold text-[.8rem] focus:border-orange-500 focus:outline-none"
                          />
                        </div>
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
                              value = {formData.email}
                              onChange = {handleInputs}
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
                            value = {formData.password}
                            onChange={handleInputs}
                            placeholder="Password"
                            className="w-100 mt-2 py-2 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold text-[.8rem] focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    

                    <button
                        type="submit"
                        onClick={PostData}
                        className=" ml-6 md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-1.5 px-4 rounded-lg mt-6 text-[1rem] hover:bg-orange-600 transition ease-in-out duration-300"
                    >
                        Submit
                    </button>
                </form>
                <div className="p-6 bg-gray-100 rounded-lg h-auto ">
                    <div className= "w-full h-full flex flex-col justify-center items-center gap-6">
                        <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                        <div className='flex p-6 text-[1rem]'>
                            <p>Already registered?&nbsp;</p>
                            <Link
                            to={'/login'}
                            className='hover:text-black hover:underline font-semibold'
                            >
                              Login here
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register 