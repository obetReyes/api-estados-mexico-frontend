import * as yup from "yup";

const passwordResetValidations = yup.object({
    
    email:yup.string().required('el campo no puede estar vacio').email('el email no es valido')
})
const  logInValidations = yup.object({
    email: yup.string().required('necesita introducir un correo electronico'),
    password: yup.string().required('necesita introducir una contraseña'),
})

const signUpValidations = yup.object({
    username:yup.string().required('el nombre de usuario es requerido').max(40, "el nombre de usuario no puede tener menos de 40 caracteres").min(5,'el nombre de usuario no puede ser menor a 5 caracteres'),
    email: yup.string().required('necesita introducir un correo electronico'),
    password1: yup.string().required('necesita introducir una contraseña'),
    password2: yup.string().required('por favor confirma tu contraseña').oneOf([yup.ref("password1"), null], "las contraseñas no coinciden")
})



export {logInValidations, signUpValidations, passwordResetValidations}