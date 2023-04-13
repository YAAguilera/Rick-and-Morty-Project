import React from "react";
import style from "./Form.module.css"

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass=/\d/
export function validate(userData){
const errors={}
    if(!userData.email){
        errors.email="Esta vacío"
    }
    else if(!regexEmail.test(userData.email)){
        errors.email="Email no válido"
    }
    else if(userData.email.length>35){
        errors.email="Email no válido"
    }

    //pass
    else if(!regexPass.test(userData.password)){
        errors.password="Debe tener al menos un número"
    }
    else if(userData.password.length<6 && userData.password.length>10){
        errors.password="Debe tener entre 6 y 10 caracteres"
    }
    return errors
}

export default function Form (props){
    const[userData, setUserData]=React.useState({
        email:"",
        password:""
    })

    const [errors, setErrors]=React.useState({})

const handleChange=(evento)=>{
    setUserData({
        ...userData,
        [evento.target.name]:evento.target.value
    })
    setErrors(
        validate({
            ...userData,
            [evento.target.name] : evento.target.value,
        })
    )
}

const handleSubmit=(evento)=>{
    evento.preventDefault()
    props.login(userData)

}



    return(
    <div>
        <form className={style.main} onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
            name="email"
            type="text"
            className={style.emailIn}
            value={userData.email}
            onChange={handleChange}
            />
           <p>{errors.email}</p>
            <label>Password</label>
            <input 
            name="password"
            type="password"
            className={style.passIn}
            value={userData.password}
            onChange={handleChange}
            />
            <p>{errors.password}</p>
            <button type="submit"
            className={style.boton}
            >Submit</button>
        </form>
    </div>
    )
}