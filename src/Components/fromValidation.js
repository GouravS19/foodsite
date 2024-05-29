// import React from 'react'

export default function fromValidation(email,password,isLogIn,name) {
    const emailVal=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const passVal=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    
    if(!isLogIn){
        const nameval=/([a-zA-Z0-9_\s]+)/.test(name.current.value)
        if(!nameval) return "Enter a valid name"
    }
    if(!emailVal) return "Enter a valid email"
    if(!passVal) return "Enter a valid password"
    return null;
}
