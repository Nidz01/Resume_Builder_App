import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Autorization (props) {

  const [state, setState] = useState({
   userName: '',
   email: '',
   password: '',
   confirmPassword: ''
  })
  
  useEffect (() => {
    if (cookies.get('userName')) {
      setState(prev => ({
        ...prev,
        userName: cookies.get('userName')
      }))
    } 
  },[])

  const setUsername = name => {
    setState(prev => ({...prev, userName: name}))
  }


  const remove = () => {
    setState(prev => ({...prev, userName: null}))
    cookies.remove('userName')
  }


  //work eith back_end
 /* const [state, setState]  = useState();
  useEffect (() => {
    axios.post('/users/redirect')
      .then(response => {
        if(response.data.loggedUser){
          console.log(response.data.loggedUser)
          setState(true)
          
        } else {
          setState(false)          
        }
      })
  })*/
  return {state, remove, setState, setUsername}
}