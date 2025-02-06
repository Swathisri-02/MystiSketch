import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center'>
        <form >
            <h1>Sign Up</h1>
            <p>Welcome back! Please sign in to continue</p>

            <div>
                <img src={assets.user_icon} alt="" />
            </div>
        </form>
    </div>
  )
}

export default Login