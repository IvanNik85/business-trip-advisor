import React, {useState} from 'react'
import InputField from './Input'
import Button from '../../../UI/Button/Button'

import './Form.scss';

 const Form = (props)=> {
    const [name, setName] = useState("");  
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");

    let {title, classes,buttontext}=props

    //button onClick calls fecth or axios and sends {name:name, email:email,password :password} ili tako nesto
   
    return (
       
        <div className={['form-container', classes].join(" ")}>
             
            <form action='#'>
            <h1>{title}</h1>
            <InputField type='email' name='email' placeholder='Email' onChangeHandler = {e => setEmail(e.target.value)}/>
           <InputField type='text' name='password' placeholder='Pasword' onChangeHandler = {e => setPassword(e.target.value)}/>
           
           {classes === 'sign-up-container' ? 
           <InputField type='text' name='name' placeholder='Name' onChangeHandler = {e => setName(e.target.value)}/> : null }

     

            <Button>{buttontext}</Button>

            </form>
        </div>
    )
 }

export default Form