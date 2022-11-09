import React, {useState} from 'react'
import { useAut } from '../../contexts/authContext'


import { useRouter } from 'next/router'
import Link from 'next/link'

import {yupResolver} from "@hookform/resolvers/yup"
import { passwordResetErrors } from '../../helpers/authErrors'
import { passwordResetValidations } from '../../helpers/sessionValidations'
import {useForm, SubmitHandler} from "react-hook-form"
import {toast} from "react-toastify"


type Inputs = {
  email:string
}

const recuperarCuenta = () => {
  const router = useRouter()
  const {passwordReset, setEmailSent} = useAut()
  const [formErrors, setFormErrors] = useState<string>('')
  const {register,  handleSubmit,reset,formState: { errors }, } = useForm<Inputs>({
    resolver: yupResolver(passwordResetValidations), 
    reValidateMode: "onSubmit",
  });
  const notification = () => toast('se ha enviado un correo electronico para restablecer tu contraseña, por favor revisa tu bandeja de entrada', {
    toastId: 1
  });
  

  const sendForm: SubmitHandler<Inputs> = async (data) => {
    
    try {
      await passwordReset(data.email);
      console.log("ingreso correctamente")
      setEmailSent('se ha enviado')
      setFormErrors("");
      reset();
      notification()
      router.push('/')
      
    }
      catch (error: any) {
        let errorCode:string = error.code;
        if(errorCode in passwordResetErrors){
          setFormErrors(passwordResetErrors[errorCode])
            reset()
          }else{
            setFormErrors('ocurrio un error desconocido')
          }
          reset()
      }
    
  }
  return (
   
       <section className='h-full w-screen flex flex-col  justify-start mt-32'>
      <h1 className='text-center  mt-4 text-xl uppercase'>recuperar cuenta</h1>
      <p className='text-center mt-4'>introduce tu correo electronico y revisa tu bandeja de entrada para poder restaurar tu contraseña</p>
      <form className='flex flex-col w-10/12 mx-auto justify-center mt-12 md:w-8/12 lg:w-6/12' autoComplete='off' onSubmit={handleSubmit(sendForm)}>
        <label htmlFor='email' className='mt-2'>correo electronico</label>
        <input type="email" id='email' className='border border-slate-400  py-1 outline-none'  {...register("email")}/>
   
        <input type="submit" id='submitForm' value="enviar correo electronico" className='border py-1 mt-4 border-slate-400 bg-slate-300 hover:bg-slate-400' />
      </form>
      <section className='w-10/12 mx-auto flex justify-between mt-6 pointer md:w-8/12 lg:w-6/12'>
        <Link href="/sesion/ingreso"><p className='underline-offset-2 underline decoration-bue-900'>iniciar sesion</p></Link>
      </section>
      {errors.email  || formErrors.length > 1 ? <section className='w-10/12 mx-auto flex flex-col  space-y-2  text-red-600 mt-6 md:w-8/12 md:mt-12 lg:w-6/12'>
      {formErrors.length > 1 &&  <p>{formErrors} </p>}
        {errors.email &&  <p>{errors.email?.message} </p>}
      </section>: null}
      </section>
 
  )
}

export default recuperarCuenta