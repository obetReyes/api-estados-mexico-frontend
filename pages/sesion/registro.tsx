import React, {useState} from 'react'
import { useAut } from '../../contexts/authContext'


import { useRouter } from 'next/router'
import Link from 'next/link'

import {yupResolver} from "@hookform/resolvers/yup"
import { signUpErrors } from '../../helpers/authErrors'
import { signUpValidations } from '../../helpers/sessionValidations'
import {useForm, SubmitHandler} from "react-hook-form"



type Inputs = {
  username:string
  email:string
  password1:string
  password2:string
}

const registro = () => {
  const router = useRouter()
  const {signUp, createUsername} = useAut()
  const [formErrors, setFormErrors] = useState<string>('')
  const {register,  handleSubmit,reset,formState: { errors }, } = useForm<Inputs>({
    resolver: yupResolver(signUpValidations), 
    reValidateMode: "onSubmit",
  });

  const sendForm: SubmitHandler<Inputs> = async (data) => {
    
    try {
      await signUp(data.email, data.password2);
      await createUsername(data.username)
      console.log("registro correcto")
      setFormErrors("");
      reset();
      router.push('/')
      
    }
      catch (error: any) {
        let errorCode:string = error.code;
        if(errorCode in signUpErrors){
          setFormErrors(signUpErrors[errorCode])
            reset()
          }else{
            setFormErrors('ocurrio un error desconocido')
          }
          reset()
      }
    
  }
  
  return (
    
 <div className='w-screen '>
      <section className='h-full w-screen flex flex-col  justify-start mt-8 md:mt-20'>
      <h1 className='text-center  mt-4 text-xl uppercase'>Crear Cuenta</h1>
      <form className='flex flex-col w-10/12 mx-auto justify-center mt-12 md:w-8/12 lg:w-6/12' autoComplete='off' onSubmit={handleSubmit(sendForm)}>
      <label htmlFor='username' className='mt-2'>nombre de usuario</label>
        <input type="text" id='username' className='border border-slate-400  py-1 outline-none' {...register("username")}/>
        <label htmlFor='email' className='mt-2'>correo electronico</label>
        <input type="email" id='email' className='border border-slate-400  py-1 outline-none' {...register("email")}/>
        <label htmlFor='password1' className='mt-2'>contraseña</label>
        <input type="password" id='password1' className='border border-slate-400    py-1 outline-none' {...register("password1")}/>
        <label htmlFor='password2' className='mt-2'>confirmar contraseña</label>
        <input type="password" id='password2' className='border border-slate-400  py-1 outline-none' {...register("password2")}/>
        <input type="submit" id='submitForm' value="Registrarse" className='border py-1 mt-4 border-slate-400 bg-slate-300 hover:bg-slate-400' />
      </form>
      <section className='w-10/12 mx-auto flex justify-between mt-6 pointer md:w-8/12 lg:w-6/12'>
        <Link href="/sesion/ingreso"><p className='underline-offset-2 underline decoration-bue-900'>Iniciar sesión</p></Link>
      </section>
      {errors.email || errors.username  || errors.password1 ||  errors.password2 || formErrors.length > 1 ? <section className='w-10/12 mx-auto flex flex-col  space-y-2  text-red-600 mt-6 md:w-8/12 md:mt-12 lg:w-6/12'>
      {formErrors.length > 1 &&  <p>{formErrors} </p>}
      {errors.username &&  <p>{errors.username?.message} </p>}
      {errors.email &&  <p>{errors.email?.message} </p>}
        {errors.password1 &&  <p>{errors.password1?.message} </p>}
        {errors.password2 &&  <p>{errors.password2?.message} </p>}
      </section>: null}
      </section>
    </div>
  
  )
}

export default registro