import React, { useEffect } from 'react'

import { useRouter } from 'next/router'
import { withProtected } from '../../helpers/routes'

const perfil = ({auth}:any) => {
  const router = useRouter()
  const {user} = auth;
  const { perfil } = router.query
  const currentUser = user?.name
  
 
  return (
 
 <div> este es mi usuario {currentUser}</div>
    
  )
}

export default  withProtected(perfil)