import React, { useEffect, useState } from 'react'


function Cart() {
    const callAboutPage = async() => {
        try {
          const resData = await fetch(`/user/api/current-user`,{
            method: "GET",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify()
          });
    
          if(resData.status !== 201){
            navigate('/login')
            // window.location.href = '/login'
            // history.push('/login')
          }
          const {user, msg} = await resData.json()
          setUserData(user);
          // console.log(userData.username)
          // console.log("message : ", msg);
          
    
        } catch (error) {
          console.log("Error while fetching current-user ",error)
        }
      }
      useEffect(() => {
        callAboutPage();
       //  gitHub();
       }, [])
          // window.location.href = '/login'
  return (
    <div>Cart</div>
  )
}

export default Cart