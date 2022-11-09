import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import {yupResolver} from "@hookform/resolvers/yup"
import { signInErrors } from '../../helpers/authErrors'
import { logInValidations } from '../../helpers/sessionValidations'
import { useForm, SubmitHandler } from "react-hook-form";

import { withPublic } from '../../helpers/routes'

type Inputs = {
  email:string
  password:string
}


const ingreso = ({auth}:any) => {
  
  const router = useRouter()
  const { signIn} = auth;
  const [formErrors, setFormErrors] = useState<string>('')
  const {register,  handleSubmit,reset,formState: { errors }, } = useForm<Inputs>({
    resolver: yupResolver(logInValidations), 
    reValidateMode: "onSubmit",
  });

  const sendForm: SubmitHandler<Inputs> = async (data) => {
    
    try {
      await signIn(data.email, data.password);
      console.log("ingreso correctamente")
      setFormErrors("");
      reset();
      router.push('/')
      
    }
      catch (error: any) {
        let errorCode:string = error.code;
        if(errorCode in signInErrors){
          setFormErrors(signInErrors[errorCode])
            reset()
          }else{
            setFormErrors('ocurrio un error desconocido')
          }
          reset()
      }
    
  }
  return (
    
 <div className='w-screen '>
      <section className='h-full w-screen flex flex-col  justify-start mt-32'>
      <h1 className='text-center  mt-4 text-xl uppercase'>Iniciar sesión</h1>
      <form className='flex flex-col w-10/12 mx-auto justify-center mt-12 md:w-8/12 lg:w-6/12' autoComplete='off' onSubmit={handleSubmit(sendForm)}>
        <label htmlFor='email' className='mt-2'>correo electronico</label>
        <input type="email" id='email' className='border border-slate-400  py-1 outline-none'  {...register("email")}/>
        <label htmlFor='password' className='mt-2'>contraseña</label>
        <input type="password" id='password' className='border border-slate-400    py-1 outline-none' {...register("password")} />
        <input type="submit" id='submitForm' value="ingresar" className='border py-1 mt-4 border-slate-400 bg-slate-300 hover:bg-slate-400' />
      </form>
      <section className='w-10/12 mx-auto flex justify-between mt-6 pointer md:w-8/12 lg:w-6/12'>
        <Link href="/sesion/registro"><p className='underline-offset-2 underline decoration-bue-900'>registrarse</p></Link>
        <Link href="/sesion/ingreso"><p className='underline-offset-2 underline decoration-blue-900'>olvide la contraseña</p></Link>
      </section>
      {errors.email || errors.password || formErrors.length > 1 ? <section className='w-10/12 mx-auto flex flex-col  space-y-2  text-red-600 mt-6 md:w-8/12 md:mt-12 lg:w-6/12'>
      {formErrors.length > 1 &&  <p>{formErrors} </p>}
        {errors.email &&  <p>{errors.email?.message} </p>}
        {errors.password &&  <p>{errors.password?.message} </p>}
      </section>: null}
      </section>
    </div>
    
  )
}

export default withPublic(ingreso)