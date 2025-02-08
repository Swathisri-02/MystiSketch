import React,{ useState, useEffect, useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

  const [state, setState] = useState('Login')
  const {setShowLogin, backendUrl, setToken, setUser} = useContext(AppContext);

  const [name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try{
      if(state === 'Login'){
        const {data} = await axios.post(backendUrl + '/api/user/login',{email, password})

        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
        }
        else{
          toast.error(data.message)
        }
      }
      
      else{
        const {data} = await axios.post(backendUrl + '/api/user/register',{name,email, password})

        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
        }
        else{
          toast.error(data.message)
        }
      }
    } 
    catch(error){
      toast.error(error.message)
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <motion.form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'
        initial={{ opacity: 0.2,y:50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1,y:0 }}
        viewport={{ once: true }}
        >
            <h1 className='text-center text-2xl text-neutral-800 font-medium'>{state}</h1>
            
            <p className='text-sm'>Welcome back! Please sign in to continue</p>

            {
              state !== 'Login' &&
              <div className='border px-6 py-2 flex items-center gap-2 mt-4 rounded-full'>
                <img src={assets.profile_icon} className='h-5' alt="" />
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='outline-none text-sm' placeholder='Full Name' required />
            </div>}

            <div className='border px-6 py-2 flex items-center gap-2 mt-4 rounded-full'>
                <img src={assets.email_icon} className='' alt="" />
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className='outline-none text-sm' placeholder='Email id' required />
            </div>

            <div className='border px-6 py-2 flex items-center gap-2 mt-4 rounded-full'>
                <img src={assets.lock_icon} className='' alt="" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='outline-none text-sm' placeholder='Password' required />
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
        </motion.form>
    </div>
  )
}

export default Login