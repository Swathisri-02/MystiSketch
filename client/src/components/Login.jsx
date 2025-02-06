import React,{ useState, useEffect, useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Login = () => {

  const [state, setState] = useState('Login')

  const {setShowLogin} = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <form className='relative bg-white p-10 rounded-xl text-slate-500' >
            <h1 className='text-center text-2xl text-neutral-800 font-medium'>{state}</h1>
            
            <p className='text-sm'>Welcome back! Please sign in to continue</p>

            {
              state !== 'Login' &&
              <div className='border px-6 py-2 flex items-center gap-2 mt-4 rounded-full'>
                <img src={assets.profile_icon} className='h-5' alt="" />
                <input type="text" className='outline-none text-sm' placeholder='Full Name' required />
            </div>}

            <div className='border px-6 py-2 flex items-center gap-2 mt-4 rounded-full'>
                <img src={assets.email_icon} className='' alt="" />
                <input type="email" className='outline-none text-sm' placeholder='Email id' required />
            </div>

            <div className='border px-6 py-2 flex items-center gap-2 mt-4 rounded-full'>
                <img src={assets.lock_icon} className='' alt="" />
                <input type="password" className='outline-none text-sm' placeholder='Password' required />
            </div>

            <p className='text-sm my-4 text-blue-600 cursor-pointer'>Forgot Password ?</p>

            <button className='bg-blue-600 text-white py-2 w-full rounded-full'>{state === 'Login' ? 'Login' : 'Create account'}</button>

            { state === 'Login' ?
              <p className='mt-5 text-center'>
              Don't have an account? <span 
              className='text-blue-600 cursor-pointer' onClick={() => setState('Sign up')}>Sign Up</span></p>
            :
            <p className='mt-5 
            text-center'>Already have an account? <span 
            className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>Login</span></p>}

            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' />
        </form>
    </div>
  )
}

export default Login