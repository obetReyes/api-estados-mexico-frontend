export const signUpErrors:{[index: string]:any} = {
    "auth/email-already-in-use":"el correo electronico ya esta en uso",
    "auth/invalid-email":"el correo electronico no es valido",
    "auth/weak-password":"la contraseña introducida no es valida, por favor elige una contraseña mas fuerte"
}

export const signInErrors:{[index:string]:any} = {
    "auth/invalid-email":"el correo electronico  no es valido",
    "auth/user-disabled":"el correo electronico no es valido",
    "auth/user-not-found":"no  existe un usuario con ese correo electronico",
    "auth/wrong-password":"las credenciales son invalidas"
}

export const passwordResetErrors:{[index:string]:any} = {
    "auth/invalid-email":"el correo electronico no es valido",
    "auth/user-not-found":"no  existe un usuario con ese correo electronico"
}