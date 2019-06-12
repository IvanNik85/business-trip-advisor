import React from 'react'
 
const InputField =(props) => {
   
     const {type, name, placeholder, onChangeHandler} = props;
   
    return( 
        <input type= {type} name={name} placeholder ={placeholder} onChange={onChangeHandler} />
    )
}
export default InputField