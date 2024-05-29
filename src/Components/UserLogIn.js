import  { useRef, useState } from "react"
import fromValidation from "./fromValidation"
const UserLogIn=()=>{
    const [isLogIn,setisLogIn]=useState(true)
    const [message,setMessage]=useState('')

    const email=useRef(null)
    const name=useRef(null)
    const password=useRef(null)
    const handleClick=()=>{
        email.current.value=null
        password.current.value=null
        setMessage('')
        setisLogIn(!isLogIn)
    }
    const validate=()=>{
        let ms=fromValidation(email.current.value,password.current.value,isLogIn,name)
        setMessage(ms)
        if(ms==null){
            console.log("log in or sign up done")
        }
    }
    return(
        <div className="">
            {/* header of the web (logo) */}
            <div className="flex justify-start shadow-sm">
                <img src="https://cdn.worldvectorlogo.com/logos/swiggy-logo.svg" alt="logo" className='sm:h-[5rem] h-[4.5rem] sm:pl-16 pl-7 py-4'/>
            </div>
            {/* form section */}
            <form className="flex sm:h-[80vh] h-[85vh] justify-center items-center " onSubmit={(e)=>{
                e.preventDefault()
            }}>
                <div className=" w-10/12 sm:w-[35%]">
                    {/* for login and image row */}
                    <div className="grid grid-cols-12 sm:grid-cols-2 mb-6">
                        <div className='py-4 col-span-8 sm:col-span-1'>
                            <div className="text-2xl font-semibold ">{isLogIn?"Login":"Sign Up"}</div>
                            <p onClick={handleClick} className="cursor-pointer">or <span className="text-[#fc7f19]">{isLogIn?"create an account":" login to your account"}</span></p>
                        </div>
                        <div className='flex justify-end  col-span-4 sm:col-span-1 items-center'>
                            <img alt='food '  src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r' className='sm:h-20 h-16  '/>
                        </div>
                    </div>
                    {/* for input field */}
                    {!isLogIn && <input type="text" placeholder="Name" ref={name} className="w-full p-4 border-2 sm:p-6 outline-none border-b-0"/>}
                    <input type="email" placeholder="Email address" ref={email} className="w-full p-4 border-2 sm:p-6 outline-none"/>
                    <input type="password" placeholder="Password" ref={password} className="w-full p-4 border-2 sm:p-6 outline-none border-t-0"/>
                    <p className="mt-4 font-semibold">{message}</p>
                    <button className='w-full p-3 bg-orange-400 mt-5 text-white font-semibold rounded-sm' onClick={validate} >{isLogIn?"LOGIN":"SIGN UP"}</button>
                    <p className="text-[11px] mt-2 font-medium" >By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
                </div>
            </form>
        </div >
        
    )
}
export default UserLogIn