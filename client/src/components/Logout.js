import React, { useEffect } from "react";
import {useHistory} from "react-router-dom";
import Cookies from 'universal-cookie'



export default function Logout() {


  ///Using Promises method
  const history = useHistory();
  const cookie = new Cookies();
  
  useEffect(()=>{
    fetch('/logout' , {
      method:"GET",
      // headers:{
      //   Accept:"Application/json",
      //   "Content-type": "Application/json",
        
      //   //"jwtoken":localStorage.getItem('jwtoken')
      // },
      // credentials:"include"
    }).then((res) => {
      history.push('/login' , {replace:true});
      cookie.remove('jwtoken')
      if (!res.status===200) {
        const error= new Error(res.error);
        throw error;
      }
    }).catch((err)=> {
      console.log(err);
    });

   });


    return (
      <div >
           
          <h1>Logout ka page</h1>

      </div>
    );
  }