import React, { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../App';

export default function Logout() {

    const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/user/api/logout`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then((res) => {
            dispatch({type:"USER", payload: false})
            navigate('/login')
            // window.location.href="/login";
            // history.push('/login')
            if(res.status !== 201){
                throw new Error("Error while fetching logout",res.error)
            }
        }).catch((err) => {
            console.log(err)
        });
        
    })

  return (
    <div>Logout</div>
  )
}

